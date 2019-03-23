BIN   := ./node_modules/.bin
PATH  := $(BIN):$(PATH)

main:
	clear
	@echo [main]
	@echo Project: Barnabas

ready:
	@echo [ready]
	@mkdir -p logs

compile-front:
	@echo [compile-front]
	@$(BIN)/webpack

compile-back:
	@echo [compile-back]
	@$(BIN)/babel server -d dst -q

lint:
	@echo [lint]
	@$(BIN)/eslint client server test -f stylish --color

babel-tests:
	@echo [babel-tests]
	@PORT=5555 LEVEL=silly $(BIN)/istanbul cover --print summary $(BIN)/_mocha ./test/scripts/testSetup.js  ./client/components -- --recursive --compilers js:babel-core/register --require ignore-styles

unit-tests-babel:
	@echo [babel-tests]
	@$(BIN)/_mocha ./test/scripts/testSetup.js ./test -- --recursive --compilers js:babel-core/register

tests:
	@echo [tests]
	@PORT=5555 LEVEL=silly $(BIN)/istanbul cover --print summary $(BIN)/_mocha -- --recursive

watch: all
	@echo [watch]
	@$(BIN)/chokidar 'client/**/*.js' 'server/**/*.js' 'test/**/*.js' -c 'make all'

fast-tests-watch: fast-tests
	@echo [fast-tests-watch]
	@$(BIN)/chokidar 'client/**/*.js' 'server/**/*.js' 'test/**/*.js' -c 'make fast-tests'

fast-tests: main ready compile-back babel-tests

fast-tests-front: main ready babel-tests

all: main ready compile-front compile-back

build: main ready compile-front compile-back
