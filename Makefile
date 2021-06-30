MAIN_JS_FILE := "src/index.js"

all:
	npx prettier --single-quote false --html-whitespace-sensitivity strict --no-bracket-spacing --quote-props preserve --trailing-comma es5 --print-width 100 --write --tab-width 4 src/*.js src/vendors/*.js
	reset
	node ${MAIN_JS_FILE}