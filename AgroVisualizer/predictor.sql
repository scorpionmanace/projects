insert into predictvalue
select year,sum(value)/1000000 from productioncomparisonnonull 
group by year


insert into predictProduction
select year,sum(production)/1000000 from productioncomparisonnonull 
group by year

delect 

