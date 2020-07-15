# FontSpider Scaffold

Just a scaffold to use FontSpider easily.

## Usage

You should have git, node, and yarn installed on your system. Then clone the repository and install dependencies.

```
git clone https://github.com/moesoha/fontspider-scaffold.git
yarn
```

Put your files, css, fonts and etc in `./src`, then use `yarn build` to generate your webfonts. Final files are in `./dist` . Notice only the `./src/*.html` files will be analyzed, or you can modify `gulpfile.js` on your own.

There are 4 common types of webfont, `eot`, `woff`, `ttf` and `svg` . For best compatibility, we suggest to use CSS like this:

```
@font-face {
	font-family: 'Source Han Serif CN';
	src: url('../fonts/SourceHanSerifCN-Medium.eot');
	src:
		url('../fonts/SourceHanSerifCN-Medium.eot?#font-spider') format('embedded-opentype'),
		url('../fonts/SourceHanSerifCN-Medium.woff') format('woff'),
		url('../fonts/SourceHanSerifCN-Medium.ttf') format('truetype'),
		url('../fonts/SourceHanSerifCN-Medium.svg') format('svg');
}
```

FontSpider will analyze which characters to be included in the final font by CSS selectors in HTML. You only need to make sure the TTF file exists and other three will be generated. OTF file should be converted to TTF first.

## Example

One example is located in `./example`, copy files in it to `./src` and then run `yarn build`. You will see a subset Noto Sans with 7 chars (`JSahino`) selected by `<p>` and a subset Cascadia Code with 9 chars (`,.Hdelorw`) available in `./dist/fonts` .
