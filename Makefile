.POSIX:
SHELL := /bin/bash
PNPM :=  $(shell which pnpm)
# Build the application
.PHONY: build
build: install
	@echo -e "\033[32mBuilding the application...\033[0m"
	$(PNPM) --dir frontend run build
	@echo -e "\033[32mBuild finished.\033[0m"
# Local development
.PHONY: dev
dev: install
	$(PNPM) --dir frontend run dev
# Format the code
.PHONY: fmt
fmt:
	@echo -e "\033[32mFormatting the code...\033[0m"
	$(PNPM) run fmt
	@echo -e "\033[32mFormatting finished.\033[0m"
# Install dependencies
.PHONY: install
install:
	@echo -e "\033[32mInstalling dependencies...\033[0m"
	${PNPM} install
	${PNPM} --dir frontend install
	@echo -e "\033[32mDependencies installed.\033[0m"
