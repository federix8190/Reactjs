module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: 19876,
                    base: "dist",
                    //keepalive: true,
                    livereload: true,
                    middleware: function(connect, options, defaultMiddleware) {
                        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
                        console.log(proxy)
                        return [proxy].concat(defaultMiddleware);
                    }
                }/*,
                proxies: [{
                    context: '/mundo/v1',
                    host: "localhost",
                    port: 8080,
                    headers: {
                        'host': 'localhost'
                    }
                }]*/
            }
        },
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:19876'
            }
        },
		copy: {
            main: {
                files: [{
                    cwd: 'libs',
                    src: '**/*',
                    dest: 'dist/libs',
                    expand: true
				}, {
					cwd: 'scripts',
                    src: '**/*',
                    dest: 'dist/scripts',
                    expand: true
				}, {
                    cwd: 'img',
                    src: '**/*',
                    dest: 'dist/img',
                    expand: true
				}, {
                    cwd: '.',
                    src: 'index.html',
                    dest: 'dist/',
                    expand: true
                }]
			}
		},
        watch: {
            react_test: {
                options: {
                    livereload: true
                },
                files: ['webapp/**/*'],
                tasks: ['compile']
            }
        }
	});	
	grunt.registerTask('default', ['copy:main', 'configureProxies:server', /*"open",*/ 'connect:server', 'watch:react_test']);
};