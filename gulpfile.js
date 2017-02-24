// 载入外挂  
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'), //压缩CSS  
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    //  htmlmin = require('gulp-htmlmin'),  
    autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
//sass,less 将sass,less文件转为css文件
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
//实时预览；
//var connect=require('gulp-connect');
// gulp.task('server',function(){
//     connect.server({
//         root:'dist',//设置文件根目录
//         port:8080,//设置端口
//         livereload:true//动态加载，实时刷新 
//     })
// });
//监听index.html如果有变化执行copyHtml任务
gulp.task('watch', function() {
    gulp.start(['copyHtml', 'copyScripts', 'copyimg']);  
    gulp.watch('./js/**', ['copyScripts']);
});
gulp.task('copyHtml', function() {
    return gulp.src(['./index.html'])
        .pipe(gulp.dest('./dist/')) //拷背压缩后的路径  
        //.pipe(connect.reload())//实时刷新
        .pipe(notify({
            message: 'copyHtml task complete'
        }));
});
gulp.task('copyScripts', function() {
            return gulp.src(['./js/*.js']) // 要压缩的js文件  
                .pipe(concat('join.js')) //合并成一个文件
                    //.pipe(uglify()) //使用uglify进行压缩
                    .pipe(rename('join.min.js')) //重命名    
                    .pipe(gulp.dest('./dist/js')) //拷背压缩后的路径  
                    .pipe(notify({
                         message: 'copyScripts task complete'
                    }));
                }); 
gulp.task('copyimg', function() {
            return gulp.src('./img/*.{jpg,png}') // 要拷背的图片。
                .pipe(gulp.dest('./dist/img')) //拷背压缩后的路径  
                .pipe(notify({
                    message: 'copyimg task complete'
                }));
        });
        //将sass转为css
        gulp.task('sass', function() {
            return gulp.src(['./css/*.sass'])
                .pipe(sass())
                .pipe(gulp.dest('./dist/css')) //拷背压缩后的路径 
                .pipe(notify({
                    message: 'sass task complete'
                }));
        });
        //将less转为css
        gulp.task('less', function() {
            return gulp.src(['./css/*.less'])
                .pipe(less())
                .pipe(gulp.dest('./dist/css')) //拷背压缩后的路径  
                .pipe(notify({
                    message: 'less task complete'
                }));
        });
        //考背多个路径下的文件
        // gulp.task('js', function() {
        //     return gulp.src(['./js/js1.js','./js/js2.js','!./js/js3.js'])// 要拷背的图片。**：匹配任何字符，包括文件分隔符。！：表示排除匹配
        //         .pipe(gulp.dest('./dist/js'))//拷背压缩后的路径  
        //         .pipe(notify({  
        //             message: 'js task complete'  
        //         }));  
        // }); 
        // // 预设任务  
        gulp.task('default', ['copyHtml', 'copyScripts', 'copyimg'], function() {
            console.log("ggg");
            //gulp.start(['copyHtml', 'copyScripts', 'copyimg']);  
        });
        //监听源文件，源文件发生变化则重启服务器，时实刷新
        //gulp.task('default',['server','watch']);
