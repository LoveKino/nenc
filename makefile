THIS_FILE := $(lastword $(MAKEFILE_LIST))

test: 
	@echo $@
	@$(MAKE) -f $(THIS_FILE) build-grammer
	@$(MAKE) -f $(THIS_FILE) build-java
	@$(MAKE) -f $(THIS_FILE) link-js
	@$(MAKE) -f $(THIS_FILE) test-all

test-java:
	@echo $@
	@$(MAKE) -f $(THIS_FILE) build-grammer
	@$(MAKE) -f $(THIS_FILE) build-java
	mocha "test/java/test/**/*.js" -t 1000000 -g "${GREP}"

test-js:
	@echo $@
	@$(MAKE) -f $(THIS_FILE) build-grammer
	@$(MAKE) -f $(THIS_FILE) link-js
	mocha "test/js/test/**/*.js" -t 1000000 -g "${GREP}"

build-grammer:
	@echo $@
	npm run build

build-java:
	@echo $@
	pushd ./grammer/library/java/nenc-java-interpreter && ./gradlew build && popd

link-js:
	@echo $@
	npm link ./grammer/library/js/nenc-js-interpreter

test-all:
	@echo $@
	mocha "test/**/*.js" -t 1000000 -g "${GREP}"

.PHONY: test build-grammer build-java link-js test-all test-java
