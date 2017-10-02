THIS_FILE := $(lastword $(MAKEFILE_LIST))

test: 
	@echo $@
	@$(MAKE) -f $(THIS_FILE) build-js
	@$(MAKE) -f $(THIS_FILE) build-java
	@$(MAKE) -f $(THIS_FILE) build-grammer
	@$(MAKE) -f $(THIS_FILE) test-all

test-java:
	@echo $@
	@$(MAKE) -f $(THIS_FILE) build-java
	@$(MAKE) -f $(THIS_FILE) build-grammer
	mocha "test/java/test/**/*.js" -t 1000000 -g "${GREP}"

test-js:
	@echo $@
	@$(MAKE) -f $(THIS_FILE) build-js
	@$(MAKE) -f $(THIS_FILE) build-grammer
	mocha "test/js/test/**/*.js" -t 1000000 -g "${GREP}"

build-grammer:
	@echo $@
	npm run build

build-java:
	@echo $@
	pushd ./grammer/library/java/nenc-java-interpreter && ./gradlew build && popd

build-js:
	@echo $@
	pushd ./grammer/library/js/nenc-js-interpreter && ./node_modules/.bin/webpack && popd

test-all:
	@echo $@
	mocha "test/**/*.js" -t 1000000 -g "${GREP}"

build-release:
	@echo $@
	@$(MAKE) -f $(THIS_FILE) build-js
	@$(MAKE) -f $(THIS_FILE) build-java
	cp ./grammer/library/js/nenc-js-interpreter/lib/nenc-js-interpreter.js ./release/dev/interpreter/
	cp ./grammer/library/java/nenc-java-interpreter/build/libs/nenc-java-interpreter.jar ./release/dev/interpreter

.PHONY: test build-grammer build-java test-all test-java build-release
