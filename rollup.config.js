import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
	input: 'es/index.js',
	output: {
		file: './index.js',
		format: 'iife'
	},
	plugins: [
		resolve({ extensions: ['.js'] }),
        uglify()
    ]
};