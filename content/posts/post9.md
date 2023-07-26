---
title: "02. Nachbauanleitung"
date: 2023-07-24T00:08:16+02:00
featured_image: "/pictures/wordclock.jpeg"
draft: false
---

Eine WordClock ist eine Uhr, die anstelle von Zahlen Wörter oder Buchstaben verwendet, um die Uhrzeit anzuzeigen. 
Indem die WordClock mit einem intelligenten Kalender verknüpft wird, hilft sie dabei die Uhrzeit im Blick zu behalten und gleichzeitig über anstehende Termine informiert zu sein.
Daneben bietet der "WordClockanazier" weitere Features wie einen Farbwechselbutton, ein Ambient-Light und eine automatische Helligkeitsanpassung.
Einzelne Komponenten wie das Ambient-Light oder der Kalender können zudem beliebig ein- und ausgeschaltet werden. 
Betrieben wird die Uhr mit einem 5V Netzteil.


### Bauteile, Zubehör und benötigte Programme

Technik:
- [ ] Wemos D1 mini 
- [ ] RTC Modul
- [ ] Knopf Batterie (für RTC Modul)
- [ ] 3m LED Stripe (60 LEDs pro Meter)
- [ ] 3x 4in1 Led Matrizen 
- [ ] USB auf Mikro USB Kabel (zum uploaden des Codes)


Materialien:
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

Sonstiges:
- [ ] 2 x 3 mm dicke Spanplatte (mindestens 30x30cm groß)
- [ ] Durchsichtiges Filament (PLA)
- [ ] Schwarzes Filament (PlA)
- [ ] 2 Komponenten Kleber


Geräte:
- [ ] großer 3D Drucker
- [ ] Lasercutter
- [ ] Lötkolben und -zubehör

Programme: 
- [ ] Arduino IDE
- [ ] Lightburn 
- [ ] (Fusion 360)



Bauteile zu Cutten:
- [ ] Buchstabenplatte (3mm Spanplatte)
- [ ] LED Halterung (3mm Spanplatte)

Bauteile zu Drucken:
- [ ] Matrizenhalterung (Schwarz)
- [ ] Rahmen (Schwarz)
- [ ] Raster (Schwarz)
- [ ] Rasterfüllung (Durchsichtig)
- [ ] Rückplatte (Durchsichtig)


### Dateien

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


#### Lightburn Dateien:
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizen%20Halterung%20v4.stl" download>Buchstabenplatte</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizen%20Halterung%20v4.stl" download>Furnier</a>


#### SVG's:
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizen%20Halterung%20v4.stl" download>Buchstabenplatte</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizen%20Halterung%20v4.stl" download>Furnier</a>

#### Code:
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizen%20Halterung%20v4.stl" download>Code</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizen%20Halterung%20v4.stl" download>Font</a>


### Aufbau und Lötplan

{{< figure src="../pictures/aufbau.jpg" width="100%"height="80%">}}
{{< figure src="../pictures/loetplan.jpg" width="100%"height="80%">}}


### Schritt für Schritt Bauanleitung


```cpp
#include test
test
test
 ```


### Lizensierung

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Dieses Werk ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Namensnennung 4.0 International Lizenz</a>.