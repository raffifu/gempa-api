# Gempa API
API yang menyediakan data Gempa Bumi terkini. Data diperoleh dari BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)


## Mengapa Project ini dibuat
Dikarenakan data yang diperoleh dari BMKG berbentuk XML, project ini dibuat untuk mempermudah pembacaan data tersebut dalam bentuk JSON


## Endpoint
- `/gempa/terkini` : Gempa Bumi yang baru saja terjadi
- `/gempa/dirasakan` : 15 gempa bumi terbaru yang dirasakan
- `/gempa/magnitudo` : 15 gempa bumi dengan magnitudo > 5.0


## How to run
1. `yarn install`
2. `yarn start`

### Sumber Data : [BMKG](https://data.bmkg.go.id/gempabumi/) 