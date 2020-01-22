# React mintaprojekt

## Docker tippek & trükkök

## Indítás
```
docker-compose up
```
Első alkalommal buildel is, ami el fog tartani egy pár percig, de nem lesz mindig ilyen hosszú.

Indítás a háttérben: `docker-compose up -d`, de így nem látod az outputot.

## Leállítás
Sima `CTRL+C` ha nem a `-d` opcióval indítottad. Ellenkező esetben (vagy ha bezártad a terminalt amiből indítottad)
```
docker-compose down
```

## Fejlesztés

Az app a localhost:3000-en érhető el. A portot a `docker-compose.yml` fájlban változtathatod. Ha erre igényed van, olvass utána a docker compose doksiban.

A mentett változtatások egyből megjelennek a konténerben, így működik a hot reload is.

### Parancsok kiadása a konténerben
```
docker-compose exec app sh
```
Ennek hatására a konténerben, a `/app` mappában találod magad. Itt azt csinálsz, amit akarsz, egy fullos linux fájlrendszer áll a rendelkezésedre. Függőséget is így telepíthetsz: bemész a konténerbe és kiadod pl. a `yarn add redux react-redux` parancsot.

### Ha valami elromlik
Ha baj van a node-dal, összeomlik a dev környezet, vagy a függőségek nem találhatók, próbálkozhatsz az image újrabuildelésével.
```
docker-compose build
```
Ez el fog tartani egy ideig, ha a függőségeket is telepítenie kell újra.

Végső esetben használható a `docker-compose build --no-cache`, ez tényleg a nulláról húz fel mindent, de erre nem hiszem hogy szükséged lesz.

## Néhány egyéb gondolat
Yarn package managert használunk a projektben, így a dockeres környezetben is ezt lőttem be. Sajna kitörölte a package.lock fájlt de hát most ez van :/