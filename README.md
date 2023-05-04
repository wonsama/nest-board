# nest-board

nest js 게시판 만들기

## 의존성 추가 설치

```sh
npm install --save @nestjs/typeorm typeorm mysql2 uuid
```

## backend

nestjs

### 설치

```sh
$ npm i -g @nestjs/cli
$ nest new backend
```

## 모듈 만들기

```sh
$ nest g module {모듈명}
$ nest g controller {모듈명}
$ nest g service {모듈명}

# 테스트 코드 (spec.ts) 없이 생성하고자 한다면
$ nest g controller {모듈명} --no-spec
```

## frontend

## 참조링크

- [Docker Compose로 MySQL/MariaDB 세팅하기](https://int-i.github.io/sql/2020-12-31/mysql-docker-compose/)
- [NestJS, TypeORM and PostgreSQL — full example development and project setup working with database migrations.](https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f)
- [[NestJS] NestJS 설치 및 애플리케이션 구축해보기](https://kth990303.tistory.com/410)
- [[Docker] PostgreSQL Docker Compose 파일 작성](https://afsdzvcx123.tistory.com/entry/Docker-PostgreSQL-Docker-Compose-%ED%8C%8C%EC%9D%BC-%EC%9E%91%EC%84%B1)
- [hub-postgres](https://hub.docker.com/_/postgres/tags)
