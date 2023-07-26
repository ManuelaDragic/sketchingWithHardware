---
title: "02. Nachbauanleitung"
date: 2023-07-24T00:08:16+02:00
featured_image: "/pictures/wordclock.jpeg"
show_reading_time: true
draft: false
---

Eine WordClock ist eine Uhr, die anstelle von Zahlen Wörter oder Buchstaben verwendet, um die Uhrzeit anzuzeigen. 
Indem die WordClock mit einem intelligenten Kalender verknüpft wird, hilft sie dabei die Uhrzeit im Blick zu behalten und gleichzeitig über anstehende Termine informiert zu sein.
Daneben bietet der "WordClockanazier" weitere Features wie einen Farbwechselbutton, ein Ambient-Light und eine automatische Helligkeitsanpassung.
Einzelne Komponenten wie das Ambient-Light oder der Kalender können zudem beliebig ein- und ausgeschaltet werden. 
Betrieben wird die Uhr mit einem 5V Netzteil. 


### Bauteile, Zubehör und benötigte Programme

#### Technik:
- [ ] Wemos D1 mini 
- [ ] RTC Modul
- [ ] Knopf Batterie (für RTC Modul)
- [ ] 3m LED Stripe (60 LEDs pro Meter)
- [ ] 3x 4in1 Led Matrizen 
- [ ] USB auf Mikro USB Kabel (zum uploaden des Codes)

#### Materialien:
- [ ] Verschiedene Kabel (rot, schwarz, lila, blau, gelb, grün, braun)
- [ ] Schrumpfschläuche
- [ ] 3x Platine 2x8cm
- [ ] 1x Platine 6x8cm
- [ ] 3x Button groß (1cm x 1cm)
- [ ] 3x Buttonkappe (schwarz)
- [ ] Helligkeitssensor
- [ ] 2x Diode
- [ ] 1x Widerstand 2,2kOhm
- [ ] 1x Widerstand 4,7 kOhm
- [ ] 2x Widerstand 470 Ohm
- [ ] 1x ON/OFF Kippschalter
- [ ] 5V Adapter
- [ ] 5V 3A Netzteil
- [ ] 4 Senkkopfschrauben (3mm Durchmesser, 12mm lang)
- [ ] 4 Schrauben Fassungen (3mm Durchmesser, 5mm lang)

#### Sonstiges:
- [ ] 2 x 3 mm dicke Spanplatte (mindestens 30x30cm groß)
- [ ] Durchsichtiges Filament (PLA)
- [ ] Schwarzes Filament (PLA)
- [ ] Doppelseitiges Klebeband
- [ ] 2 Komponenten Kleber

#### Geräte:
- [ ] großer 3D Drucker
- [ ] Lasercutter
- [ ] Lötkolben und -zubehör

#### Programme: 
- [ ] Arduino IDE
- [ ] Lightburn 
- [ ] (Fusion 360)


#### Bauteile zu Cutten:
- [ ] Buchstabenplatte (3mm Spanplatte)
- [ ] LED Halterung (3mm Spanplatte)
- [ ] Holzfurnier


#### Bauteile zu Drucken:
- [ ] Matrizenhalterung (Schwarz)
- [ ] Rahmen (Schwarz)
- [ ] Raster (Schwarz)
- [ ] Rasterfüllung (Durchsichtig)
- [ ] Rückplatte (Durchsichtig)


{{< figure src="../pictures/bauteile.jpeg" width="100%"height="80%">}}
{{< figure src="../pictures/druck_schwarz.jpeg" width="100%"height="80%">}}
{{< figure src="../pictures/druck_durchsichtig.jpeg" width="100%"height="80%">}}
{{< figure src="../pictures/buchstabenplatte.jpeg" width="100%"height="80%">}}
{{< figure src="../pictures/furnier.jpeg" width="100%"height="80%">}}
{{< figure src="../pictures/led_halterung.jpeg" width="100%"height="80%">}}



### Dateien zum Download

#### STL's:
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizenhalterung.stl" download>Matrizenhalterung</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Word%20Clock%20Rahmen.stl" download>Rahmen</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Raster.stl"    download>Raster</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Rasterfüllung.stl" download>Rasterfüllung</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Rueckplatte.stl" download>Rückplatte</a>

#### Fusion Dateien:
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizenhalterung.f3d" download>Matrizenhalterung</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Word%20Clock%20Rahmen.f3d" download>Rahmen</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Raster.f3d"    download>Raster</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Rasterfüllung.f3d" download>Rasterfüllung</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Rueckplatte.f3d" download>Rückplatte</a>

#### Lightburn Datei:
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Lasercut.lbrn2" download>Lasercut</a>

#### SVG:
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Lasercut.svg" download>SVG Lasercut</a>

#### Code:
- <a href="https://github.com/ManuelaDragic/swh/blob/main/code/WordClock.ino" download>Code</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/code/WordClockFont.h" download>Font</a>


### Aufbau und Lötplan

{{< figure src="../pictures/aufbau.jpg" width="100%"height="80%">}}
{{< figure src="../pictures/widerstaende.jpg" width="100%"height="80%">}}
{{< figure src="../pictures/loetplan.jpg" width="100%"height="80%">}}


### Schritt für Schritt Bauanleitung

#### 1. Wordclock programmieren

#### 1.1 RTC Modul

```cpp
#include test
test
test
 ```

- zeit auslesen

#### 1.2 LED's ansteuern

- zeiten cheken und entsprechend led stripe an und aus machen

#### 2. LED-Matrizen 

#### 2.1 Kalenderdaten

- Apple Kalender in Google Kalender
- Kalender muss öffentlich sein

- Google apps script erstellen
- Code 
- Bereitstellen

#### 2.2 Lauftext anzeigen

- string empfangen und in substrings aufteilen

#### 2.3 Eigene Font erstellen

- mit seite eigene font zusammenklicken

#### 3. Buttons und Helligkeitssensor

- widerstände und dioden verwenden 
- code erklären

#### 4. Löten

{{< figure src="../pictures/loetplan.jpg" width="100%"height="80%">}}

#### 5. Zusammenbau

{{< figure src="../pictures/aufbau.jpg" width="100%"height="80%">}}


### Lizensierung

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Dieses Werk ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Namensnennung 4.0 International Lizenz</a>.