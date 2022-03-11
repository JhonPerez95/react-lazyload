## Creando image para docker


### Se crea la imagen 
##### docker build -t <nameImage> .

### Crea container y lo arranca en detach -d
##### docker run -d -p 8082:80 --name <nameContainer> <nameImage>
