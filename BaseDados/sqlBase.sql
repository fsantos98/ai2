/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2017                    */
/* Created on:     12/05/2020 00:32:36                          */
/*==============================================================*/

if exists (select 1
            from  sysobjects
           where  id = object_id('Pesquisa')
            and   type = 'U')
   drop table Pesquisa
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Pedidos')
            and   type = 'U')
   drop table Pedidos
go

if exists (select 1
            from  sysobjects
           where  id = object_id('LivroReviews')
            and   type = 'U')
   drop table LivroReviews
go

if exists (select 1
            from  sysobjects
           where  id = object_id('LivroCategoria')
            and   type = 'U')
   drop table LivroCategoria
go

if exists (select 1
            from  sysobjects
           where  id = object_id('LivroAutor')
            and   type = 'U')
   drop table LivroAutor
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Dimensoes')
            and   type = 'U')
   drop table Dimensoes
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Livro')
            and   type = 'U')
   drop table Livro
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Lingua')
            and   type = 'U')
   drop table Lingua
go

if exists (select 1
            from  sysobjects
           where  id = object_id('TipoCapa')
            and   type = 'U')
   drop table TipoCapa
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Configuracoes')
            and   type = 'U')
   drop table Configuracoes
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Usuario')
            and   type = 'U')
   drop table Usuario
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Categoria')
            and   type = 'U')
   drop table Categoria
go

if exists (select 1
            from  sysobjects
           where  id = object_id('AutorEditora')
            and   type = 'U')
   drop table AutorEditora
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Autor')
            and   type = 'U')
   drop table Autor
go

if exists (select 1
            from  sysobjects
           where  id = object_id('Editora')
            and   type = 'U')
   drop table Editora
go



/*==============================================================*/
/* Table: Autor                                                 */
/*==============================================================*/
create table Autor (
   idAutor              int                  not null,
   nomeAutor            varchar(255)         not null,
   constraint PK_AUTOR primary key (idAutor)
)
go

/*==============================================================*/
/* Table: Editora                                               */
/*==============================================================*/
create table Editora (
   idEditora            int                  not null,
   nomeEditora          varchar(255)         not null,
   constraint PK_EDITORA primary key (idEditora)
)
go

/*==============================================================*/
/* Table: AutorEditora                                          */
/*==============================================================*/
create table AutorEditora (
   idAutor              int                  not null,
   idEditora            int                  not null,
   constraint PK_AUTOREDITORA primary key (idAutor, idEditora),
   constraint FK_AUTOREDI_AUTOREDIT_AUTOR foreign key (idAutor)
      references Autor (idAutor),
   constraint FK_AUTOREDI_AUTOREDIT_EDITORA foreign key (idEditora)
      references Editora (idEditora)
)
go

/*==============================================================*/
/* Table: Categoria                                             */
/*==============================================================*/
create table Categoria (
   idCategoria          int                  not null,
   nome                 varchar(20)          not null,
   constraint PK_CATEGORIA primary key (idCategoria)
)
go

/*==============================================================*/
/* Table: Usuario                                               */
/*==============================================================*/
create table Usuario (
   idUsuario            int                  not null,
   username             varchar(32)          not null,
   password             varchar(255)         not null,
   nomeUsuario          varchar(255)         not null,
   email                varchar(255)         not null,
   dataRegisto          datetime             not null,
   constraint PK_USUARIO primary key (idUsuario)
)
go

/*==============================================================*/
/* Table: Configuracoes                                         */
/*==============================================================*/
create table Configuracoes (
   idConfiguracao       int                  not null,
   idUsuario            int                  not null,
   modoEscuro           bit                  not null,
   constraint PK_CONFIGURACOES primary key (idConfiguracao),
   constraint FK_CONFIGUR_TEM_CONFI_USUARIO foreign key (idUsuario)
      references Usuario (idUsuario)
)
go

/*==============================================================*/
/* Table: TipoCapa                                              */
/*==============================================================*/
create table TipoCapa (
   idTipoCapa           int                  not null,
   nomeTipoCapa         varchar(255)         not null,
   descricaoTipoCapa    varchar(255)         null,
   constraint PK_TIPOCAPA primary key (idTipoCapa)
)
go

/*==============================================================*/
/* Table: Lingua                                                */
/*==============================================================*/
create table Lingua (
   idLingua             int                  not null,
   nomeLingua           varchar(255)         null,
   constraint PK_LINGUA primary key (idLingua)
)
go

/*==============================================================*/
/* Table: Livro                                                 */
/*==============================================================*/
create table Livro (
   idLivro              int                  not null,
   idLingua             int                  not null,
   idTipoCapa           int                  not null,
   idEditora            int                  null,
   isbn                 varchar(13)          not null,
   titulo               varchar(255)         not null,
   sinopseCurta         text                 null,
   sinopseLonga         text                 null,
   lingua               int                  null,
   anoPublicacao        int                  null,
   ratingLivro          smallint             null,
   numRatings           int                  null,
   numPaginas           int                  null,
   constraint PK_LIVRO primary key (idLivro),
   constraint FK_LIVRO_RELATIONS_EDITORA foreign key (idEditora)
      references Editora (idEditora),
   constraint FK_LIVRO_RELATIONS_TIPOCAPA foreign key (idTipoCapa)
      references TipoCapa (idTipoCapa),
   constraint FK_LIVRO_ESCRITO_E_LINGUA foreign key (idLingua)
      references Lingua (idLingua)
)
go

/*==============================================================*/
/* Table: Dimensoes                                             */
/*==============================================================*/
create table Dimensoes (
   idDimensoes          int                  not null,
   idLivro              int                  null,
   comprimento          real                 null,
   largura              real                 null,
   altura               real                 null,
   constraint PK_DIMENSOES primary key (idDimensoes),
   constraint FK_DIMENSOE_TEMDIMENS_LIVRO foreign key (idLivro)
      references Livro (idLivro)
)
go

/*==============================================================*/
/* Table: LivroAutor                                            */
/*==============================================================*/
create table LivroAutor (
   idLivro              int                  not null,
   idAutor              int                  not null,
   constraint PK_LIVROAUTOR primary key (idLivro, idAutor),
   constraint FK_LIVROAUT_TEM_LIVRO foreign key (idLivro)
      references Livro (idLivro),
   constraint FK_LIVROAUT_TEM2_AUTOR foreign key (idAutor)
      references Autor (idAutor)
)
go

/*==============================================================*/
/* Table: LivroCategoria                                        */
/*==============================================================*/
create table LivroCategoria (
   idLivro              int                  not null,
   idCategoria          int                  not null,
   constraint PK_LIVROCATEGORIA primary key (idLivro, idCategoria),
   constraint FK_LIVROCAT_RELATIONS_LIVRO foreign key (idLivro)
      references Livro (idLivro),
   constraint FK_LIVROCAT_RELATIONS_CATEGORI foreign key (idCategoria)
      references Categoria (idCategoria)
)
go

/*==============================================================*/
/* Table: LivroReviews                                          */
/*==============================================================*/
create table LivroReviews (
   idLivroReviews       int                  not null,
   idLivro              int                  not null,
   idUsuario            int                  not null,
   ratingLivro          smallint             not null,
   tituloReview         text                 null,
   textoReview          text                 null,
   dataReview           datetime             not null,
   votosPositivos       int                  null,
   votosNegativos       int                  null,
   constraint PK_LIVROREVIEWS primary key (idLivroReviews),
   constraint FK_LIVROREV_RECEBE_LIVRO foreign key (idLivro)
      references Livro (idLivro),
   constraint FK_LIVROREV_E_AVALIAD_USUARIO foreign key (idUsuario)
      references Usuario (idUsuario)
)
go

/*==============================================================*/
/* Table: Pedidos                                               */
/*==============================================================*/
create table Pedidos (
   idPedido             int                  not null,
   idUsuario            int                  not null,
   isbnPedido           varchar(13)          not null,
   qntPedidos           int                  null,
   constraint PK_PEDIDOS primary key (idPedido),
   constraint FK_PEDIDOS_FAZ_USUARIO foreign key (idUsuario)
      references Usuario (idUsuario)
)
go

/*==============================================================*/
/* Table: Pesquisa                                              */
/*==============================================================*/
create table Pesquisa (
   idPesquisa           int                  not null,
   textoPesquisa        varchar(255)         not null,
   dataPesquisa         datetime             not null,
   constraint PK_PESQUISA primary key (idPesquisa)
)
go

