module.exports = function(grunt) {
	
	
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
			dist: [ "dist/" ],
			sassed: [ "assets/css/_sassed" ]
		},
		
		copy: {
			dist:{ 
				files: [
				    { expand: true, cwd: "views/", src: ["**"], dest: "dist/views/" },
					{ expand: true, cwd: ".", src: [".htaccess","*.html","*.php","*.json"], dest: "dist/" }
			    ] 
			}
		},
		
		compass: {
			dev: {
				options: {
					sassDir: 'assets/css',
					cssDir: 'dist/css',
					imageDir: 'assets/img'
				}
			}
		},
		
		watch: {
			files: [
			        'views/**',
			        'assets/**',
			        'docs/**',
			        // ignore:
			        '!assets/css/_sassed/**'
			       ],
			 tasks: ['default']
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', [
	    'clean',
	    'compass',
	    'copy:dist'
	    ]);
};