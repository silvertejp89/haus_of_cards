# MySQL Docker Container - Projectarium

## Syfte

Vi använder Docker för att skapa en isolerad MySQL-miljö för projektet **Haus of Cards**. Containern gör det enkelt att starta och dela databasen mellan teammedlemmar, och den kan återanvändas för framtida projekt i **Projectarium**.

---

## Instruktioner för att köra containern

### Containerinställningar

- **Container Name:** `projectarium-db`
- **Portinställningar:**
  - **Host-port:** `3307`
  - **Container-port:** `3306`
- **Miljövariabler:**
  - `MYSQL_ROOT_PASSWORD=my-secret-pw`
  - `MYSQL_DATABASE=haus_of_cards`

---

### Hur man använder containern

#### Starta containern

1. Öppna Docker Desktop.
2. Hitta containern `projectarium-db` i fliken **Containers**.
3. Klicka på **Start** för att köra den.

#### Anslut till databasen

Använd dessa inställningar för att ansluta till MySQL:

- **Host:** `localhost`
- **Port:** `3307`
- **Username:** `root`
- **Password:** `my-secret-pw`
- **Databas:** `haus_of_cards`

---

## Vanliga kommandon för Docker

För terminalanvändare kan du också använda följande kommandon:

- **Starta containern:**
  ```bash
  docker start projectarium-db
  ```
- **Stoppa containern:**
  ```bash
  docker stop projectarium-db
  ```
- **Kontrollera att containern körs:**
  ```bash
  docker ps
  ```

---

## Felsökning

### Om `3307` är upptagen

1. Stäng tjänsten som använder port `3307`, eller
2. Använd en annan host-port (t.ex. `3308`) och uppdatera inställningarna.

### Om containern inte körs

1. Kontrollera loggarna i Docker Desktop.
2. Kontrollera att du har en fungerande Docker-installation.

---

## Kontakt

Om du stöter på problem, kontakta [teamlead eller tekniskt ansvarig] för hjälp.
