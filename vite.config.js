import { defineConfig } from 'vite'

       export default defineConfig({
        root: './src', //сборка из папки src
       		server: {
			port: 3000, //(запуск на 3000 порту)
	open: true, //(настройка чтобы страница открывалась по умолчанию в браузере
		},
		build: {
			outDir: '../dist', // сборка в корне проекта в папке dist
		}
       })