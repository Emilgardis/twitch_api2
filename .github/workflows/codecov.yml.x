# This doesn't work currently there is a bug in the output of grcov
on:
  push:
    branches:
      - master
      - staging
      - trying

name: Code Coverage
jobs:
  coverage:
    name: Run test coverage
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
        with:
          submodules: recursive
      - name: Toolchain setup
        uses: actions-rs/toolchain@v1
        with:
          toolchain: nightly
          override: true
          components: llvm-tools-preview
      - name: Cache cargo
        uses: actions/cache@v2
        id: cache
        with:
          path: |
            ~/.cargo/registry
            ~/.cargo/git
            target
          key: ${{ runner.os }}-nightly-cargo-target-cov-${{ hashFiles('**/Cargo.lock') }}
          restore-keys: ${{ runner.os }}-nightly-cargo-target-${{ hashFiles('**/Cargo.lock') }}
      - uses: actions-rs/cargo@v1
        continue-on-error: true
        with:
          command: test
          args: --no-fail-fast --features "twitch_oauth2/all all unsupported deny_unknown_fields trace_unknown_fields"
        env:
          CARGO_INCREMENTAL: '0'
          RUSTFLAGS: '-Zprofile -Ccodegen-units=1 -Cinline-threshold=0 -Clink-dead-code -Coverflow-checks=off -Cpanic=abort -Zpanic_abort_tests'
          RUSTDOCFLAGS: '-Zprofile -Ccodegen-units=1 -Cinline-threshold=0 -Clink-dead-code -Coverflow-checks=off -Cpanic=abort -Zpanic_abort_tests'
      - id: coverage  
        uses: actions-rs/grcov@v0.1
        continue-on-error: true
      - name: Coveralls upload
        uses: coverallsapp/github-action@master
        continue-on-error: true
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          path-to-lcov: ${{ steps.coverage.outputs.report }}