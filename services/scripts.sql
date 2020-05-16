-- Table: resultados

-- DROP TABLE resultados;

CREATE TABLE resultados
(
  id serial NOT NULL,
  fecha smallint,
  equipo_1 character varying(55),
  goles_1 smallint,
  equipo_2 character varying(55),
  goles_2 smallint,
  CONSTRAINT resultados_pk PRIMARY KEY (id)
)
WITH (OIDS=FALSE);
ALTER TABLE resultados OWNER TO postgres;


insert into resultados(fecha, equipo_1, goles_1, equipo_2, goles_2)values(1, 'Argentina', 4, 'Corea', 0);
insert into resultados(fecha, equipo_1, goles_1, equipo_2, goles_2)values(1, 'Inglaterra', 2, 'Egipto', 0);
insert into resultados(fecha, equipo_1, goles_1, equipo_2, goles_2)values(1, 'Italia', 1, 'USA', 1);
insert into resultados(fecha, equipo_1, goles_1, equipo_2, goles_2)values(1, 'Rumania', 1, 'Colombia', 0);


select * from resultados