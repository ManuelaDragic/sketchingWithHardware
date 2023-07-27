---
title: "02. Nachbauanleitung - WordClockanazier"
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

Die Kosten für das Projekt betragen etwa 50 Euro.

{{< figure src="../pictures/Wordclock.jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/Rahmen_oben(neu).jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/Rahmen_rechts(neu).jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/Rahmen_links(neu).jpeg" width="60%"height="60%">}}
{{< rawhtml >}} 
<video width=60% controls autoplay>
    <source src="../pictures/Funktionen.mp4" type="video/mp4">
    Your browser does not support the video tag.  
</video>
{{< /rawhtml >}}

</br>

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

{{< figure src="../pictures/bauteile.jpeg" width="100%"height="80%">}}

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
- [ ] Bandsäge, Stichsäge oder eine andere Säge
- [ ] kleiner Schraubenzieher

#### Programme: 
- [ ] Arduino IDE
- [ ] Lightburn 
- [ ] (Fusion 360)

#### Bauteile zu Cutten:
- [ ] Buchstabenplatte (3mm Spanplatte)
- [ ] LED Halterung (3mm Spanplatte)
- [ ] Holzfurnier (Buche)

#### Bauteile zu Drucken:
- [ ] Matrizenhalterung (Schwarz)
- [ ] Rahmen (Schwarz)
- [ ] Raster (Schwarz)
- [ ] Rasterfüllung (Durchsichtig)
- [ ] Rückplatte (Durchsichtig)

#### Zum testen:
- [ ] Steckplatine
- [ ] Jumperkabel


</br>

### Dateien zum Download

#### 3D-Modelle (STL's):
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizenhalterung.stl" download>Matrizenhalterung</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Word%20Clock%20Rahmen.stl" download>Rahmen</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Raster.stl"    download>Raster</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Rasterfüllung.stl" download>Rasterfüllung</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Rueckplatte.stl" download>Rückplatte</a>

#### Fusion360 Dateien:
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
- <a href="https://github.com/ManuelaDragic/swh/blob/main/code/WordClock.ino" download>Programmcode</a>
- <a href="https://github.com/ManuelaDragic/swh/blob/main/code/WordClockFont.h" download>WordClock Font</a>


</br>

### Lötplan

{{< figure src="../pictures/loetplan.jpg" width="100%"height="80%">}}

</br>

### Schritt für Schritt Bauanleitung

#### 1. Drucken der Bauteile

Zunächst einmal müssen die verschiedenen Bauteile gedruckt werden. Die zugehörigen STL's können auf meinem <a href="https://github.com/ManuelaDragic/swh/tree/main/files" download>Github</a> heruntergeladen werden, sind oben aber nochmals verlinkt.
Wichtig ist, dass für den Rahmen und die Rückplatte ein großer Drucker benötigt wird, da die Bauteile später ca. 25x35cm groß werden.
(Ich verwendete dazu den Creality CR10S5).
Der <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Word%20Clock%20Rahmen.stl" download>Rahmen</a> des WordClockanizers, die <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Matrizenhalterung.stl" download>Matrizenhalterung</a> und das <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Raster.f3d"    download>Raster</a> werden mit schwarzem PLA gedruckt. Für die <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Rasterfüllung.f3d" download>Rasterfüllung</a> und die <a href="https://github.com/ManuelaDragic/swh/blob/main/files/WordClock%20Rueckplatte.f3d" download>Rückplatte</a> wird durchsichtiges PLA verwendet.
Falls die Modelle noch angepasst werden sollen, können die jeweiligen Fusion360 Dateien ebenfalls oben heruntergeladen werden.

{{< figure src="../pictures/druck_schwarz.jpeg" width="100%"height="80%">}}
{{< figure src="../pictures/druck_durchsichtig.jpeg" width="100%"height="80%">}}

#### 2. Lasercutten

Danach werden die Buchstabenplatte und die LED-Stripe Halterung gecuttet. Dazu verwendete ich Lightburn. Zur leichteren Anpassung habe ich alle Linien des Cuts in eine <a href="https://github.com/ManuelaDragic/swh/blob/main/files/Lasercut.lbrn2" download>Datei</a> zusammengefügt. Für die Buchstabenplatte werden das innere Rechteck und die Buchstaben benötigt. Für die LED-Stripe Halterung werden das innere Rechteck und die schrägen Cuts an der linken und rechten Seite benötigt. Die jeweils anderen Linien können in Lightburn einfach ausgeblendet und ausgeschaltet werden.
Für die beiden Komponenten habe ich zwei 3mm dicke Spanplatten verwendet. Um sicher zu gehen sollten diese ca. 30x30cm groß sein. 

Die Vorderseite der Wordclock besteht aus ca 0,4 mm dickem Holzfurnier. Dazu werden zunächst zwei DIN A4 große Furniere zusammengeklebt. Ich verwendete die Farbe Buche, es kann jedoch jedes beliebige, helle Holz oder sogar Papier verwendet werden. 
Für die Vorderseite wird das äußere Rechteck und die Buchstaben benötigt.
Da das Furnier sehr dünn und spröde ist, muss sehr langsam und mit wenig Power gecuttet werden.
Testet eure Einstellungen zunächst am besten auf einem extra Furnier, indem ihr einen Buchstaben cuttet. So wisst ihr ob die Einstellungen die richtigen sind.

{{< figure src="../pictures/buchstabenplatte.jpeg" width="100%"height="60%">}}
{{< figure src="../pictures/furnier.jpeg" width="100%"height="60%">}}

#### 3. LED Matrizen

Anschließend nehmt ihr die LED-Matrizen zur Hand. Wir brauchen später 2 Reihem mit je 6 Matrizen, somit muss eine der 4er-Matrizen in zwei Hälften gecuttet werden. Dazu müssen die Matrizen einer 4er Reihe zunächst von der ihrer Platine genommen werden. Danach wird diese Platine in der Hälfte durgesägt. Ich habe dazu eine Bandsäge verwendet, ihr könnt jedoch auch eine andere Säge verwenden. 
Die beiden Hälften müssen dann jeweils an die anderen beiden 4er Reihen gelötet werden. Dabei ist wichtig, dass die Richtung der Matrizen beachtet wird. Im Anschluss können die einzelnen Matrizen wieder aufgesteckt werden.
Ihr sollten nun 2 Reihen mit je 6 Matrizen haben.

#### 4. Buchstabenplatte und Raster

Als nächstes muss der LED-Stripe auf die Platte gefädelt werden. Dies ist zwar mit etwas Arbeit verbunden, jedoch kann der Stripe so einfach ausgetauscht werden, falls er irgendwann kaputt gehen sollte. Zunächst muss der Stripe auf die richtige Länge geschnitten werden. Es werden genau 145 LED's benötigt. Wichtig ist dabei, dass die Richtung des Stripes beachtet wird und die hinteren LED's abgeschnitten werden, da der Stecker des Stripes noch benötigt wird. 
Nach dem durchfädeln sollten in jeder Reihe 11 LED's nach vorne zeigen. An den Seiten zeigt nun immer eine LED nach hinten, diese wird später für das Ambient Light verwendet.

{{< figure src="../pictures/led_halterung.jpeg" width="100%"height="60%">}}

Über die LED's wird dann das Raster gelegt. Damit nacher alles besser hält, habe ich doppelseitiges Klebeband verwendet, um die beiden Teile zusammen zu kleben. In die Löcher des Rasters werden dann die durchsichtigen Quadrate eingesetzt. Diese müssen nicht verklebt werden, da sie später zwischen den anderen beiden Platten eingeklemmt sind und somit nicht mehr verrutschen können, bei Bedarf können diese jedoch noch mit 2 Komponenten Kleber in das Raster geklebt werden. 
Anschließend wird dann die gecuttete Buchstabenplatte, erneut mit doppelseitigem Klebeband, auf das Raster geklebt.

#### 5. Verkabelung

Der nächste Schritt ist das Verkabeln der Komponenten.
Testet zunächst ob ihr alles richtig verkabelt habt, indem ihr Jumperkabel und eine Steckplatine verwendet. Dazu verwendet ihr folgenden Plan:
{{< figure src="../pictures/loetplan.jpg" width="100%"height="80%">}}
Anbei ist noch einmal aufgelistet, welche PIN's der Komponenten mit den jeweiligen PIN's des ESP's verbunden werden:

##### RTC-Modul: 
SCL - D1

SDA - D2

VCC - 5V

GND - G

##### LED-Stripe

5V - 5V

DIN - D3

GND - G

##### LED-Matrix 1

CLK - D5

CS - D6

DATA - D7

GND - G

VCC - 5V

##### LED-Matrix 2

CLK - TX

CS - D4

DATA - D0

GND - G

VCC - 5V

##### 5V Adapter

GND - G

5V - 5V (mit zwischengeschaltetem Kippschalter)


Um die Kabel an den Adapter anzuschließen, schraubt ihr mit einem kleinen Schraubenzieher die Schrauben am Adapter ein wenig auf, steckt die Kabel rein und schraubt die Schrauben anschließend wieder gut zu.

##### Buttons und Helligkeitssensor

Bei den Buttons ist wichtig, dass immer nur die zwei nebeneinanderliegenden oder die schräg-gegenüberliegenden Füßchen verwendet werden. Falls ihr euch nicht sicher seid, testet die Buttons zunächst mit einem Multimeter.

Der Button für den Farbwechsel befindet sich an einem seperaten Pin. Er wird an einer Seite an D8 am ESP angeschlossen, die andere Seite wird an VCC am ESP angeschlossen. Da dieser Button im Code entprellt wird, brauchen wir hierfür keinen Pulldown.

Die beiden anderen Buttons und der Helligkeitssensor werden an A0 angeschlossen. A0 ist der einzige analoge Pin an unserem ESP. Damit wir die verschiedenen Signale empfangen können, müssen wir vor die Buttons und vor den Helligkeitssensor verschiedene Widerstände schalten. Dadurch werden später beim analogRead im Code verschiedene Werte gelesen, wodurch unterschieden werden kann, ob sich die Helligkeit verändert hat oder ob ein Button, bzw. welcher Button gedrückt wurde. 
Wichtig ist dabei, dass jeweils die richtigen Widerstände verwendet werden.
Während Widerstände und Helligkeitssensor keine Richtung haben, müsst ihr bei den Dioden beachten, dass ihr sie in die richtige Richtung anschließt.


#### 6. Der Code

Der nächste Schritt ist das Programmieren. Dazu muss zunächst einmal die ArduinoIDE heruntergeladen werden. 
Danach muss das Board installiert werden. Dazu geht ihr in die Preferences und fügt bei "Additional boards manager URLs" folgende Zeile ein: 
http://arduino.esp8266.com/stable/package_esp8266com_index.json

{{< figure src="../pictures/boardmanager.png" width="100%"height="100%">}}

Anschließend muss das richtige Board ausgewählt werden. Unser Board ist das Lolin Wemos D1 mini - Board.
Dazu geht ihr im Menü auf Tools > Board > ESP8266 > LOLIN WEMOS D1 R2 & mini.

{{< figure src="../pictures/boardauswahl.png" width="100%"height="100%">}}

Danach verbindet ihr euren ESP mit einem USB Kabel an euren PC oder Laptop und wählt unter Port den entsprechenden USB Port aus.
Nun geht es an den Code des Wordclockanizers.
Der <a href="https://github.com/ManuelaDragic/swh/tree/main/code" download>Programmcode</a> kann ebenfalls einfach im Repo gedownloaded werden. Beachtet jedoch, dass ihr den Code und die Font im gleichen Ordner abspeichert. Der Ordner muss den selben Namen wie unser Programmcode haben, in unserem Fall ist das "WordClock".

#### 6.1 Libraries

Für unser Programm müssen zunächst einige Libraries eingebunden werden.
```cpp
#include <Wire.h>
#include <RTClib.h>   
#include <FastLED.h>

#include <MD_Parola.h>
#include <MD_MAX72xx.h>
#include <SPI.h>

#include <Bounce2.h>

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <Arduino.h>
 ```
Diese Libraries können einfach über den Library Manager in der Arduino IDE heruntergeladen werden. Sucht dazu einfach im Suchfeld nach den jeweiligen Namen. 

{{< figure src="../pictures/libraries.png" width="100%"height="100%">}}

Zudem werden hier die Fonts für die LED Matrizen eingebunden. Falls ihr später eigene Fonts einbinden möchtet, könnt ihr das an dieser Stelle tun.


#### 6.2 Eigene Font erstellen

Falls ihr später auf euren LED-Matrizen euren eigenen Font verwenden wollt, könnt ihr euch diesen einfach auf folgender Seite zusammenklicken:
https://pjrp.github.io/MDParolaFontEditor

Durch Auswahl der Quadrate können die Buchstaben dann einfach durch klicken der jeweiligen LED's erstellt werden.
Anschließend gebt ihr auf der linken Seite noch einen Namen für euren Font ein und exportiert dann alles.
Die fertige Datei legt ihr dann in den Ordner zu eurem Code.
Zuletzt muss die Datei dann nur noch im Arduino Code eingebunden werden.

```cpp
#include "Parola_Fonts_data.h"
#include "WordClockFont.h"
```

#### 6.3 WIFI Connection 

Als nächstes müsst ihr im Code noch die WLAN Einstellungen anpassen.
```cpp
const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";
 ```

YOUR_SSID muss natürlich mit dem Namen und YOUR_PASSWORD mit dem Passwort des eigenen WLANS ersetzt werden.

#### 6.4 Kalenderdaten

##### Für Apple-Kalender User
Da Apple das auslesen der Kalenderdaten nicht so einfach macht, müsst ihr hier etwas tricksen. Um später die eigenen Apple-Kalenderdaten anzeigen zu können, müsst ihr euern Apple Kalender von einem Google Kalender abonnieren. 
Dazu muss man sich zunächst über einen Laptop oder PC mit seinem Google-Acoout beim <a href="https://workspace.google.com/products/calendar/?hl=de#" download>Google Kalender</a> anmelden. 
Anschließend kann auf der linken Seite unter  "Weitere Kalender > + > Per URL"  ein Kalender abonniert werden.

{{< figure src="../pictures/kalender_abonnieren.png" width="100%"height="100%">}}

Jetzt öffnet ihr auf eurem Handy euren Apple Kalender und klickt unten in der Mitte auf "Kalender".
Dort wählt ihr den Kalender aus, den ihr teilen möchtet und klickt auf das i.
Der Kalender muss dann noch auf öffentlich gestellt werden. Unter "Link teilen" könnt ihr den Link anschließend kopieren und in das Feld "URL des Kalenders" im Google Kalender eintragen. 
ACHTUNG! Das bedeutet, dass jetzt theoretisch jeder auf euren Kalender zugreifen kann.

{{< figure src="../pictures/link.png" width="60%"height="60%">}}
{{< figure src="../pictures/url.png" width="100%"height="100%">}}

##### Für Google-Kalender User
Falls ihr bereits einen Google-Kalender verwendet, könnt ihr diese Schritte natürlich überspringen.


Anschließend geht ihr auf <a href="https://script.google.com" download>script.google.com</a> und meldet euch dort ebenfalls mit eurem Google Account an. Dort klickt ihr dann auf "neues Projekt".

{{< figure src="../pictures/neuesProjekt.png" width="100%"height="100%">}}

Gebt dem Projekt einen Namen und kopiert folgenden Code hinein:

```js
function doGet(e) {
  
  var calendars = CalendarApp.getAllCalendars();
  
  if (calendars == undefined) {
    Logger.log("No data");
    return ContentService.createTextOutput("no access to calendar");
  }
  
  var calendars_selected = [];
  for (var i = 0; i < calendars.length; i++) {
    if (calendars[i].isSelected()) {
      calendars_selected.push(calendars[i]);
      Logger.log(calendars[i].getName());
    }
  }
  
  Logger.log("Old: " + calendars.length + " New: " + calendars_selected.length);
  const now = new Date();
  var start = new Date(); start.setHours(0, 0, 0);      // start at midnight
  const oneday = 24*3600000;                            // milliseconds
  const stop = new Date(start.getTime() + 7 * oneday);  // appointments for the next 7 days
  var events = mergeCalendarEvents(calendars_selected, start, stop);

  
  var str = '';
  for (var i = 0; i < events.length; i++) {  
    var event=events[i];    
    var myStatus = event.getMyStatus();
    
    switch(myStatus) {
      case CalendarApp.GuestStatus.OWNER:
      case CalendarApp.GuestStatus.YES:
      case CalendarApp.GuestStatus.NO:  
      case CalendarApp.GuestStatus.INVITED:
      case CalendarApp.GuestStatus.MAYBE:
      default:
        break;
    }
    
    // format date and time output
    const options1 = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const options2 = {
      hour: "numeric",
      minute: "numeric",
    };

    // create output string
    str += new Date(event.getStartTime()).toLocaleString("de-DE", options1) +  ' ';
    if (event.isAllDayEvent()) {
      str += '(Ganztägig) ';
    }
    else {
      str += new Date(event.getStartTime()).toLocaleString("de-DE", options2) +  '-' 
      + new Date(event.getEndTime()).toLocaleString("de-DE", options2) +  ' ';
    }
    str += event.getTitle() + " \n";

  }

  // replace vowels
  str = str.replace(/Ä/g, "AE");
  str = str.replace(/Ö/g, "OE");
  str = str.replace(/Ü/g, "UE");
  str = str.replace(/ä/g, 'ae');
  str = str.replace(/ö/g, 'oe');
  str = str.replace(/ü/g, 'ue');

  
  // return output String
  return ContentService.createTextOutput(str);
}

function mergeCalendarEvents(calendars, startTime, endTime) {
  var params = { start:startTime, end:endTime, uniqueIds:[] };
  return calendars.map(toUniqueEvents_, params)
                  .reduce(toSingleArray_)
                  .sort(byStart_);
}

function toCalendars_(id) { 
  return CalendarApp.getCalendarById(id); 
}

function toUniqueEvents_ (calendar) {
  return calendar.getEvents(this.start, this.end)
                 .filter(onlyUniqueEvents_, this.uniqueIds);
}

function onlyUniqueEvents_(event) {
  var eventId = event.getId();
  var uniqueEvent = this.indexOf(eventId) < 0;
  if(uniqueEvent) this.push(eventId);
  return uniqueEvent;
}

function toSingleArray_(a, b) { 
  return a.concat(b) 
}

function byStart_(a, b) {
  return a.getStartTime().getTime() - b.getStartTime().getTime();
}

```
Speichert den Code ab und drückt dann auf "Bereitstellen > Neue Bereitstellung"

{{< figure src="../pictures/bereitstellen.png" width="100%"height="100%">}}

Als Typ wählt ihr dann "Web-App" aus und bei Zugriffsrechte "Jeder". Anschließend klickt ihr auf "bereitstellen".
Jetzt erscheinen eine Bereitstellungs-ID und eine URL. Wenn ihr auf diese URL klickt und alles funktioniert hat, sollten nun eure Kalenderdaten der nächsten 7 Tage angezeigt werden.

Kopiert nun die URL und fügt sie im Arduino Code in die Methode "getKalenderData()" bei "YOUR_URL" ein:

```cpp
void getKalenderData() {

  ... 
  client.connect("script.googleusercontent.com", 443);
  String url = "YOUR_URL";
  ...
}
```

#### 6.5 Uhrzeit des RTC-Moduls stellen

Als letzten Schritt müsst ihr jetzt noch die Uhrzeit eurer Uhr richtig stellen.
Dazu könnt ihr entweder die aktuelle Zeit über eure Konsole holen, oder manuell eine Uhrzeit angeben.
Falls ihr die erste Variante verwenden möchtet, dann verzögert sich eure Uhrzeit um die Länge des Uploads eures Codes, da die Zeit so auf die Zeit des Uploadbeginns gesetzt wird.
Verwendet ihr die zweite Variante, so müsst ihr den Code zunächst mit einer Zeit 2-3 Minuten im Voraus Uploaden, um dann zur genauen Zeit den reset Button an eurem ESP drücken zu können. Damit setzt ihr dann quasie "zur richtigen Zeit" eure eingegebene Uhrzeit.
Je nachdem welche Variante ihr verwendet, müsst ihr die jeweilige Zeile in der Methode "setup()" im Code einkommentieren.
Anschließend ladet ihr den Code dann ein zweites Mal hoch, dieses Mal jedoch wieder mit der auskommentierten Zeile, sodass eure Uhrzeit nicht jedes mal beim reset zurückgesetzt wird.

```cpp
void setup() {
  
  ...

  // ----- RTC Modul -------
  //
  rtc.begin();

  // Falls das DS3231-Modul nicht korrekt erkannt wird
  if (!rtc.begin()) {
    Serial.println("Konnte RTC nicht finden!");
    while (1);
  }

  // Falls das DS3231-Modul keine Stromversorgung hatte und dadurch die Zeit verloren hat, kann die Zeit hiermit festgelegt werden
  // Beim ersten upload muss diese Zeile eingefügt werden
  // Anschließend muss der Code nochmals mit auskommentierter Zeile geuploaded werden
  // rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));

  // Oder die genaue Zeit kann hier im Format (JJJJ, MM, TT, hh, mm, ss) angegeben werden.
  // Wenn genau zu dieser Zeit reset am ESP gedrückt wird, so wird die Uhr genau auf diesen Anfangswert gestellt
  // rtc.adjust(DateTime(2023, 6, 25, 11, 59, 0));

  ...
```

Wenn am weiteren Code nichts mehr verändert werden soll, kann dieser nun einfach auf den ESP geladen werden. 
Dazu klickt ihr in eurer Arduino IDE auf den Pfeil im oberen linken Eck.
Wenn alles richtig gemacht wurde, wird euer Code nun hochgeladen und ihr könnt euer Programm testen.

#### 7. Das Programm

Um den Code ein wenig verständlicher zu machen, werden anbei noch einige wichtige Parts erklärt

#### 7.1 PINS und Hardware definieren

Zunächst müssen PINS und Hardware definiert werden. Falls ihr eine andere Verkabelung verwenden wollt, so müssen die Pins entsprechend im Code angepasst werden.

Für die LED-Matrizen gibt es 4 gängige Hardwaretypen: PAROLA_HW, GENERIC_HW, ICSTATION_HW und FC16_HW. In meinem Fall war das FC16_HW.
Falls eure Matrizen den Text komisch oder falschrum anzeigen, versucht zunächst einen anderen Hardwaretyp.
MAX_DEVICES definiert , wie viele 8x8 LED-Matrizen sich in einer Reihe befinden.
NUM_LEDS definiert die Anzahl der LEDs von eurem LED-Stripe, LED_TYPE den Typen des LED-Stripes.

```cpp
// LED Stripe
#define DATA_PIN    D3
#define LED_TYPE    WS2812
#define COLOR_ORDER GRB
#define NUM_LEDS    145  

// Matrizes
#define HARDWARE_TYPE MD_MAX72XX::FC16_HW
#define MAX_DEVICES 6

// matrix1
#define M1_CLK_PIN   D5
#define M1_CS_PIN    D6
#define M1_DATA_PIN  D7

// matrix2
#define M2_CLK_PIN   TX 
#define M2_CS_PIN    D4 
#define M2_DATA_PIN  D0

// Buttons 
#define BUTTON_PIN  D8
#define ANALOG_PIN  A0
```

#### 7.2 RTC-Modul und LED-Stripe

Um auf die Uhrzeit zuzugreifen und die LED's entsprechend zu schalten, muss die Uhrzeit zunächst vom RTC Modul ausgelesen werden.
Die Methode "showTime()" holt Datum und Uhrzeit vom RTC-Modul und checkt anschließend, welche LED's zur jeweiligen Zeit ein- und ausgeschaltet werden sollen.

```cpp
// zeigt die aktuelle Uhrzeit an
void showTime() {

  // Datum und Uhrzeit von RTC Modul auslesen
  DateTime jetzt = rtc.now();
  
  int Jahr = jetzt.year();
  int Monat = jetzt.month();
  int Tag = jetzt.day();
  int Stunde = jetzt.hour();
  int Minute = jetzt.minute();
  int Sekunde = jetzt.second();
  int Wochentag = jetzt.dayOfTheWeek();
  float Temperatur = rtc.getTemperature();

  // in das passende 12 Stunden Format bringen
  if(Stunde >= 12)
  {
      Stunde -= 12;
  }
  if(Minute >= 25)
  {
      Stunde++;
  }
  if(Stunde == 12)
  {
      Stunde = 0;
  }

  // "Es ist" ausgeben
    leds[1] = color;
    leds[2] = color;
    leds[4] = color;
    leds[5] = color;
    leds[6] = color;

  // "Uhr" anzeigen
  if(Minute < 5)
  {
    Serial.print("UHR ");
    leds[133] = color;
    leds[134] = color;
    leds[135] = color;
  }

  // Wochentag anzeigen
  Serial.print("Wochentag: ");
  Serial.print(Wochentag);
  switch (Wochentag) {
    // Montag
    case 1:
      leds[8] = color;
      leds[9] = color;
      break;
    // Dienstag
    case 2:
      leds[10] = color;
      leds[11] = color;
      break;
    // Mittwoch
    case 3:
      leds[22] = color;
      leds[23] = color;
      break;
    // Donnerstag
    case 4:
      leds[20] = color;
      leds[21] = color;
      break;
    // Freitag
    case 5:
      leds[18] = color;
      leds[19] = color;
      break;
    // Samstag
    case 6:
      leds[16] = color;
      leds[17] = color;
      break;
    // Sonntag
    case 0:
      leds[14] = color;
      leds[15] = color;
      break;
    default:
      Serial.println("Ungültiger Wochentag");
      break;
  }

  // Stunde anzeigen
  switch(Stunde) {
    case 0:
      //Zwölf
      Serial.print("ZWÖLF ");
      leds[127] = color;
      leds[128] = color;
      leds[129] = color;
      leds[130] = color;
      leds[131] = color;
      break;
    case 1:
      //EIN(S)
      Serial.print("EIN");
      leds[93] = color;
      leds[94] = color;
      leds[95] = color;
      // sobald es 5 nach 1 ist muss das s mitleuchten
      if(Minute > 4){
        leds[92] = color;
      }
      break;
    case 2:
      //Zwei
      Serial.print("ZWEI ");
      leds[85] = color;
      leds[86] = color;
      leds[87] = color;
      leds[88] = color;
      break;
    case 3:
      //Drei
      Serial.print("DREI ");
      leds[97] = color;
      leds[98] = color;
      leds[99] = color;
      leds[100] = color;
      break;
    case 4:
      //Vier
      Serial.print("VIER ");
      leds[104] = color;
      leds[105] = color;
      leds[106] = color;
      leds[107] = color;
      break;
    case 5:
      //Fünf
      Serial.print("FÜNF ");
      leds[80] = color;
      leds[81] = color;
      leds[82] = color;
      leds[83] = color;
      break;
    case 6:
      //Sechs
      Serial.print("SECHS ");
      leds[115] = color;
      leds[116] = color;
      leds[117] = color;
      leds[118] = color;
      leds[119] = color;
      break;
    case 7:
      //Sieben
      Serial.print("SIEBEN ");
      leds[121] = color;
      leds[122] = color;
      leds[123] = color;
      leds[124] = color;
      leds[125] = color;
      leds[126] = color;
      break;
    case 8:
      //Acht
      Serial.print("ACHT ");
      leds[109] = color;
      leds[110] = color;
      leds[111] = color;
      leds[112] = color;
      break;
    case 9:
      //Neun
      Serial.print("NEUN ");
      leds[137] = color;
      leds[138] = color;
      leds[139] = color;
      leds[140] = color;
      break;
    case 10:
      //Zehn
      Serial.print("ZEHN ");
      leds[140] = color;
      leds[141] = color;
      leds[142] = color;
      leds[143] = color;
      break;
    case 11:
      //Elf
      Serial.print("ELF ");
      leds[78] = color;
      leds[79] = color;
      leds[80] = color;
      break;
  }

  // Minuten anzeigen
  if(Minute >= 5 && Minute < 10)
  {
      // Fünf
      Serial.print("FÜNF ");
      leds[27] = color;
      leds[28] = color;
      leds[29] = color;
      leds[30] = color;
      // Nach
      Serial.print("NACH ");
      leds[61] = color;
      leds[62] = color;
      leds[63] = color;
      leds[64] = color;

  }
  else if(Minute >= 10 && Minute < 15)
  {
      // Zehn
      Serial.print("ZEHN ");
      leds[44] = color;
      leds[45] = color;
      leds[46] = color;
      leds[47] = color;
      // Nach
      Serial.print("NACH ");
      leds[61] = color;
      leds[62] = color;
      leds[63] = color;
      leds[64] = color;
  }
  else if(Minute >= 15 && Minute < 20)
  {
      // Viertel
      Serial.print("VIERTEL ");
      leds[53] = color;
      leds[54] = color;
      leds[55] = color;
      leds[56] = color;
      leds[57] = color;
      leds[58] = color;
      leds[59] = color;
      // Nach
      Serial.print("NACH ");
      leds[61] = color;
      leds[62] = color;
      leds[63] = color;
      leds[64] = color;
  }
  else if(Minute >= 20 && Minute < 25)
  {
      // Zwanzig
      Serial.print("ZWANZIG ");
      leds[37] = color;
      leds[38] = color;
      leds[39] = color;
      leds[40] = color;
      leds[41] = color;
      leds[42] = color;
      leds[43] = color;
      // Nach
      Serial.print("NACH ");
      leds[61] = color;
      leds[62] = color;
      leds[63] = color;
      leds[64] = color;
  }
  else if(Minute >= 25 && Minute < 30)
  {
      // Fünf
      Serial.print("FÜNF ");
      leds[27] = color;
      leds[28] = color;
      leds[29] = color;
      leds[30] = color;
      // Vor
      Serial.print("VOR ");
      leds[69] = color;
      leds[70] = color;
      leds[71] = color;
      // Halb
      Serial.print("HALB ");
      leds[73] = color;
      leds[74] = color;
      leds[75] = color;
      leds[76] = color;

  }
  else if(Minute >= 30 && Minute < 35)
  {
      // Halb
      Serial.print("HALB ");
      leds[73] = color;
      leds[74] = color;
      leds[75] = color;
      leds[76] = color;

  }
  else if(Minute >= 35 && Minute < 40)
  {
      // Fünf
      Serial.print("FÜNF ");
      leds[27] = color;
      leds[28] = color;
      leds[29] = color;
      leds[30] = color;
      // Nach
      Serial.print("NACH ");
      leds[61] = color;
      leds[62] = color;
      leds[63] = color;
      leds[64] = color;
      // Halb
      Serial.print("HALB ");
      leds[73] = color;
      leds[74] = color;
      leds[75] = color;
      leds[76] = color;

  }
  else if(Minute >= 40 && Minute < 45)
  {
      // Zwanzig
      Serial.print("ZWANZIG ");
      leds[37] = color;
      leds[38] = color;
      leds[39] = color;
      leds[40] = color;
      leds[41] = color;
      leds[42] = color;
      leds[43] = color;
      // Vor
      Serial.print("VOR ");
      leds[69] = color;
      leds[70] = color;
      leds[71] = color;
  }
  else if(Minute >= 45 && Minute < 50)
  {
      // Viertel
      Serial.print("VIERTEL ");
      leds[53] = color;
      leds[54] = color;
      leds[55] = color;
      leds[56] = color;
      leds[57] = color;
      leds[58] = color;
      leds[59] = color;
      // Vor
      Serial.print("VOR ");
      leds[69] = color;
      leds[70] = color;
      leds[71] = color;
  }
  else if(Minute >= 50 && Minute < 55)
  {
      // Zehn
      Serial.print("ZEHN ");
      leds[44] = color;
      leds[45] = color;
      leds[46] = color;
      leds[47] = color;
      // Vor
      Serial.print("VOR ");
      leds[69] = color;
      leds[70] = color;
      leds[71] = color;
  
  }
  else if(Minute >= 55 && Minute < 60)
  {
      // Fünf
      Serial.print("FÜNF ");
      leds[27] = color;
      leds[28] = color;
      leds[29] = color;
      leds[30] = color;
      // Vor
      Serial.print("VOR ");
      leds[69] = color;
      leds[70] = color;
      leds[71] = color;
  }
  
  FastLED.show();
}
```

#### 7.3 Kalenderdaten

Die Kalenderdaten werden mit Hilfe eines GoogleSkripts ausgelesen und als String gespeichert.
Da die LED-Matrizen keine Umlaute anzeigen können, werden diese hier noch vorher herausgefiltert. Zusätzlich wird der String in Großbuchstaben umgewandelt. Durch anschließendes Bereitstellen einer WebApp können die Kalenderdaten dann mit einem einfachen HTTP-Request abgefragt werden. 
Beim Einschalten der Uhr werden die Daten das Erste mal abgefragt. Der empfangene String wird dann in Substrings unterteilt und anschließend auf den LED-Matrizen angezeigt.

```cpp
void getKalenderData() {

  // HTTP-Anfrage senden
  WiFiClientSecure client;
  HTTPClient http;
  client.setInsecure();
  client.connect("script.googleusercontent.com", 443);
  String url = "https://script.googleusercontent.com/macros/echo?user_content_key=UVD2c0fU4HIhlTXUbRy2SPD-POldnF4WqYBk-lC4QJ-DxAsUHTDRI-_ln3QRAYbp3X0m2KhzVZ7MtOAKDfAUeai5pGDHS3I5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKA7A_lHrrX9Az2gE-Gb46mWXrX2xUXuwSIQtVGKvIX0ziVJ0SibTZqXWknVA5qw4Y1tPBshKWLn6s576l97UydO-Is66Eda2w&lib=MmSqlZGkjUZzizKVJNOp1s4cy7qauPi9E";
  http.setTimeout(20000);
  http.setFollowRedirects(HTTPC_STRICT_FOLLOW_REDIRECTS);
  http.begin(client, url); 
  int httpCode = http.GET();
  Serial.println(httpCode);

  // Daten in payload String speichern
  if (httpCode == 200) {
    Serial.println("Getting calendar");
    payload = http.getString();
  }

  // String in Substrings splitten
  while (payload.length() > 0)
  {
    // an jeder Zeile trennen und als Substring speichern
    int index = payload.indexOf('\n');

    if (index == -1) 
    {
      strs[StringCount] = payload;
      strs[StringCount].toUpperCase();
      strs[StringCount].toCharArray(events[StringCount], 60);
      Serial.println(strs[StringCount]);
      Serial.println(events[StringCount]);
      StringCount++;
      break;
    }

    else
    {
      strs[StringCount] = payload.substring(0, index);
      strs[StringCount].toUpperCase();
      strs[StringCount].toCharArray(events[StringCount], 60);
      Serial.println(strs[StringCount]);
      Serial.println(events[StringCount]);
      StringCount++;
      payload = payload.substring(index+1);
    }
  }
  
  http.end();
}
```

Um immer aktuelle Kalenderdaten angezeigt zu bekommen, werden im Loop zwei Uhrzeiten gecheckt, zu denen die Daten aktualisiert werden.

```cpp
loop() {
    ...
    // Kalenderdaten um 2 und 12 Uhr aktualisieren
    if (now.hour() == 1 && now.minute() == 0 && now.second() == 0 || now.hour() == 12 && now.minute() == 0 && now.second() == 0) {
        getKalenderData();
    }
}
```


#### 7.4 LED-Matrizen 

Die Kalenderdaten werden als Lauftext auf den LED-Matrizen angezeigt.
Dabei wird der erste Termin auf der ersten Matrix angezeigt, der zweite auf der zweiten Matrix. Anschließend wechselt der zweite Termin auf die erste Matrix und der nächste Termin erscheint auf der zweiten Matrix.

```cpp
void runMatrix() {
  
  // Display Text anzeigen
  matrix1.setIntensity(brightnessMatrix); 
  matrix2.setIntensity(brightnessMatrix);

  // Wenn matrix1 fertig auf true setzen
  if (matrix1.displayAnimate()) {
    matrix1Fertig = true;
  }

  // Wenn matrix2 fertig auf true setzen
  if (matrix2.displayAnimate()) {
    matrix2Fertig = true;
  }

  // Wenn beide fertig sind, neuen Text anzeigen
  if (matrix1Fertig && matrix2Fertig) {
    
    // (Zum anpassen: erster Wert: Text, zweiter Wert = Start Position, Dritter Wert = Geschwindigkeit, Vierter Wert = Pause am Ende, Fünfter Wert = Animation Rein, Sechster Wert = Animation Raus)
    // Positionen: PA_LEFT, PA_RIGHT, PA_CENTER
    // Animationsliste: PA_PRINT, PA_SCROLL_UP, PA_SCROLL_DOWN, PA_SCROLL_LEFT, PA_SCROLL_RIGHT, PA_SCROLL_UP_LEFT, PA_SCROLL_UP_RIGHT, PA_SCROLL_DOWN_LEFT, PA_SCROLL_DOWN_RIGHT,
    //                  PA_SPRITE, PA_SLICE, PA_MESH, PA_FADE, PA_DISSOLVE, PA_BLINDS, PA_RANDOM, PA_WIPE, PA_WIPE_CURSOR, 
    //                  PA_SCAN_HORIZ, PA_SCAN_HORIZX, PA_SCAN_VERT, PA_SCAN_VERTX, PA_OPENING, PA_OPENING_CURSOR, PA_CLOSING, PA_CLOSING_CURSOR, PA_GROW_UP, PA_GROW_DOWN 
    matrix1.displayText (events[i], PA_LEFT, speed, 0, PA_SCROLL_LEFT, PA_SCROLL_LEFT);
    //  set up for next text
    i++; 

    if (i == StringCount) {
      i = 0;
    } 

    matrix2.displayText (events[i], PA_LEFT, speed, 0, PA_SCROLL_LEFT, PA_SCROLL_LEFT);
      
    matrix1Fertig = false;
    matrix2Fertig = false;

    delay (1000);
  }
}
```
"displayAnimate()" startet die Animation des Lauftextes und gibt true zurück, wenn diese durchgelaufen ist.
Erst wenn beide Matrizen durchgelaufen sind werden dann neue Daten angezeigt.
"displayText()" zeigt den Text mit einer Startposition, einer Geschwindigkeit, einem Delay und einer ein- und auslauf Animation an.
Die Animationen können beliebig geändert werden. Eine Liste von Animationen ist im Kommentar gegeben.

#### 7.5 Buttons und Helligkeitssensor

Die Buttons und der Helligkeitssensor werden kontinuierlich im loop überprüft. Der Farbwechsel Button ist an einem digitalen Pin angeschlossen und wird mit einem Debouncer entprellt, sodass bei einem Klick auch nur einmal reagiert wird.
Die anderen beiden Buttons und der Helligkeitssensor befinden sich an einem analogen Pin. 
Mit "analogRead()" wird des Wert des analogen PIN's ständig überprüft. Durch Veränderung des Wertes werden dann z.B. ein Knopfdruck oder eine Änderung der Helligkeit registriert.

```cpp
void loop() {

  ...

  // ------ Farbwechsel Button ------
  //
  debouncer.update();       // Entprellten Wert aktualisieren
  if (debouncer.rose()) {
    changeColor();
  }

  // ------ Helligkeit anpassen ------
  //
  // Helligkeit herabsetzen
  if (analogRead(ANALOG_PIN) < 300) {
    brightnessDown = true;
  }

  // Helligkeit erhöhen
  if (analogRead(ANALOG_PIN) < 500 && analogRead(ANALOG_PIN) > 300) {
    brightnessDown = false;
  }


  // ------ Matrizen Button ------
  //
  // AN/AUS
  if(buttonMatrizenStatus) {
    runMatrix();
  }

  if (!matrizenStatus) {
    if (analogRead(ANALOG_PIN) > 1000) {
      buttonMatrizenStatus = !buttonMatrizenStatus;
      if(!buttonMatrizenStatus) {
        matrix1.displayClear();
        matrix2.displayClear();
        matrix1.displayReset();
        matrix2.displayReset();
        i = 0;
      }
      matrizenStatus = true;
      matrizenTimer = millis();
    }

    // ------ Backlight Button ------
    //
    // AN/AUS
    else if (analogRead(ANALOG_PIN) > 600) {
      buttonBacklightOff = !buttonBacklightOff;
      matrizenStatus = true;
      matrizenTimer = millis();
    }

  } 

  // nur auf einen Druck reagieren
  else {
    if(analogRead(ANALOG_PIN) < 500 && ((millis() - matrizenTimer) > 500)) {
      matrizenStatus = false;
    }
  }

  ...
  
}
```

#### 8. Löten

Wenn das uploaden geklappt hat und alle Kompononten funktioniern, könnt ihr nun mit dem Löten beginnen.
Nehmt nochmal den Lötplan zur Hand und lötet die Kabel nach und nach an eure Komponenten.

ACHTUNG! Achtet darauf, dass ihr vor dem Löten den Strom abzieht und die Batterie des RTC-Moduls entnehmt.

Für den ESP und das RTC Modul habe ich die 6x8cm große Platine verwendet. Lötet das RTC Modul so an, dass die Batterie nach oben zeigt. So könnt ihr diese später austauschen, falls sie leer gehen sollte.
Für die Buttons habe ich je eine der drei 2x8cm Platinen verwendet.
Damit die Buttons später in die Aussparungen im Rahmen passen, müsst ihr jetzt noch beachten, dass ihr die Buttons und den Helligkeitssensor an die richtige Stelle der Platine lötet. (Die Buttons werden jeweils in das untere Eck der Platine platziert). 
Außerdem muss beachtet werden, dass alle Kabel die richtige Länge besitzen.
Legt die Teile am besten vorher in euren Rahmen und testet, wie lang die Kabel ca. sein müssen.
Der ON/OFF-Kippschalter wird erst nach zusammenbauen der Uhr angelötet, da dieser von Außen auf den Rahmen gesteckt werden muss.

Überprüft vor dem Anschließen des Stroms nochmal alle Lötstellen und achtet darauf, dass ihr keinen Kurzschluss verursacht habt, indem ihr aus Versehen Lötstellen verbunden habt. 

#### 8. Zusammenbau

Zu Schluss muss das Projekt dann noch zusammengebaut werden.
Dazu setzt ihr zunächst die Matrizenhalterung in den Rahmen ein. In die Matrizenhalterung werden dann die LED-Matrizen geseteckt. Die Kabel führt ihr nach oben durch die Lücke in das Innere des Rahmens. Die Technik befindet sich so hinter der zuvor gebauten Buchstabenplatte. Setzt die Platinen nach folgendem Plan vorsichtig in die jeweiligen Halterungen ein. 

{{< figure src="../pictures/aufbau.jpg" width="100%"height="80%">}}

Der Helligkeitssensor sollte dabei etwas aus dem Rahmen herausschauen, sodass er die Helligkeit auch richtig messen kann.
Die Platinen der Buttons klebt ihr dann mit 2 Komponenten Kleber in die jeweiligen Lücken im Rahmen.
Anschließend klebt ihr die Buchstabenplatte mit doppelseitigem Klebeband in den Rahmen der Uhr. Wenn alles passt, sollten Rahmen, Matrizen und Buchstabenplatte nun bündig abschließen und somit eine ebene Fläche bilden.

Wenn alles passt könnt ihr dann mit einem Lötkolben die 4 Schraubenfassungen in die Löcher auf der Rückseite des Rahmens drücken.
Als Letztes kann dann die durchsichtige Rückplatte mit dem Rahmen verschraubt werden.

Zu guter Letzt kann dann noch das Furnier auf die Vorderseite der Uhr geklebt werden - Und fertig ist der selbstgebaute WordClockanizer.

{{< figure src="../pictures/schritt1.jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/schritt2.jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/schritt3.jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/schritt4.jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/schritt5.jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/furnier.jpeg" width="60%"height="60%">}}

### Lizensierung

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Dieses Werk ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Namensnennung 4.0 International Lizenz</a>.