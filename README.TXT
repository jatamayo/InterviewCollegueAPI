   MEAN_API/ npm install cors /* module para comunicacion de servidores */


/*_____________________________________________________________________________________________*/
/************ Generador de cliente angualr ************/
    MEAN_API/ npm install -g @angular/cli
    MEAN_API/ ng new frontend /*  frotend es un nombre de carpeta, tu puedes darle el nombre que quieras */



/*_____________________________________________________________________________________________*/
/************ AngularJS generar Componentes, modelos y Servicios ************/
    Crear 3 carpetas nuevas para manejar nuestro cliente
        - MEAN_API/frontend/src/app/Componentes
        - MEAN_API/frontend/src/app/models
        - MEAN_API/frontend/src/app/services

    MEAN_API/frontend/src/app/components/ ng generate component componentName
    MEAN_API/frontend/src/app/models/ ng generate class className
    MEAN_API/frontend/src/app/services/ ng generate service serviceName

    
    MEAN_API/frontend/src/app/components/ ng generate component employees
    MEAN_API/frontend/src/app/models/ ng generate class employee
    MEAN_API/frontend/src/app/services/ ng generate service employee


/*_____________________________________________________________________________________________*/
/************ MAIN API FILES ************/

	controllers/employee.controller.js
	models/employee.js
	routes/employee.routes.js


/*_____________________________________________________________________________________________*/
/************ MAIN FrontEnd FILES ************/

    MEAN_API/frontend/src/app/app.component.html
    MEAN_API/frontend/src/app/app.module.ts


    MEAN_API/frontend/src/app/components/employees/employee.component.html
    MEAN_API/frontend/src/app/components/employees/employees.components.ts
    MEAN_API/frontend/src/app/models/employee.ts
    MEAN_API/frontend/src/app/services/employee.service.spec.ts
    MEAN_API/frontend/src/app/services/employee.service.ts



/*_____________________________________________________________________________________________*/
/************ Ejecutar servidores */
    /* Servidor de angular, el servidor de angular se ejecuta en el puerto 4200 */
        MEAN_API/frontend/ ng service

    /* Servidor de node , el servidor de node se ejecuta en el puerto 3000 */
        MEAN_API/ npm run dev