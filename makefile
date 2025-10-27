.PHONY: help
help: makefile
	@tail -n +4 makefile | grep ".PHONY"


.PHONY: build
build:
	npx tsc


.PHONY: test
test: build
	npx mocha dist/test
