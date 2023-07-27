---
title: "06. Additive Fertigung"
date: 2023-02-13T14:25:02+01:00
featured_image: "/pictures/additive.jpeg"
show_reading_time: true
draft: false
---

Das Gegenstück zur Subtraktiven Fertigung ist die additive Fertigung.
Die additive Fertigung ermöglicht es, dreidimensionale Objekte aus digitalen 3D-Modellen zu drucken, indem schichtweise Material aufgetragen wird. Im Gegensatz zur subtraktiven Fertigung, wird bei der additiven Fertigung Material hinzugefügt, um ein Objekt zu fertigen. 
Es gibt verschiedene Arten von 3D-Druckern, darunter SLA (Stereolithography), FDM (Fused Deposition Modeling), SLS (Selective Laser Sintering) und SPD (Selective Powder Deposition) -Drucker.

Im Labor stehen uns verschiedene FDM-Drucker zur Verfügung.

### Software
Bevor mit dem Druck gestartet werden kann, muss zunächst einmal eine Reihe an Programmen heruntergeladenen werden.
Zum Erstellen des 3D-Models kann dabei sowohl CAD-Software (wie Fusion 360) als auch Mesh-Bearbeitungssoftware (wie Blender) verwendet werden.
Mit CAD-Software können Modelle millimetergenau mithilfe von geometrischen Formen und 3D-Körpern erstellt werden, wohingegen Mesh-Bearbeitungssoftware für komplexere oder organische Objekte benutzt werden kann.
Zudem benötigt man ein weiteres Programm, um das fertige Modell dann auch drucken zu können.
Für unseren Drucker verwendeten wir "UltiMaker Cura". 

Um ein wenig mit den Programmen vertraut zu werden, bekamen wir die Aufgabe, eine Halterung für ein Türschild zu entwerfen.
Dieses designten wir in "Fusion 360". Anschließend muss das Modell in eine Mesh-Datei umgewandelt werden. Dazu muss sie als ".stl" Datei exportiert werden, welche dann in "Ultimaker Cura" geladen wird.
Zuletzt muss die Datei dann noch "gesliced" werden. Dabei wird sie für den 3D-Druck vorbereitet und in Schichten unterteilt.
Zudem können dann noch verschiedene Einstellungen vorgenommen werden, wie die Geschwindigkeit, ob Stützstrukturen verwendet werden sollen, oder wie fein gedruckt werden soll.

{{< figure src="../pictures/Halterung1.png" width="80%"height="100%">}}


### Funktionsweise von FDM-Druckern
FDM-Drucker arbeiten durch schichtweises Auftragen von Filament auf ein Druckbett.
Das Filament wird dabei durch einen Extruder erwärmt, bis es schmilzt und flüssig wird.
Das flüssige Filament wird durch eine Düse auf das Druckbett extrudiert, um eine Schicht des 3D-Modells zu erstellen.
Der Druckkopf oder das Druckbett bewegen sich dann vertikal und wiederholen diesen Prozess, indem jede Schicht des Modells nacheinander aufgebaut wird.
Sobald das Drucken abgeschlossen ist, wird das 3D-Objekt vom Druckbett entfernt.

{{< figure src="../pictures/Drucker.jpeg" width="50%"height="50%">}}

### Arten von Druckkopf Sytemen
Dabei gibt es zwei verschiedene Arten von Druckkopf Systemen, "Bowden tube extrusion system", bei dem der Extruder weiter hinten, seperat vom Druckkopf, angebracht wird und "Direct-Drive-Extruder", bei dem der Extruder direkt am Druckkopf sitzt.
Beide Systeme bieten jeweils Vor- und Nachteile, so ist der Bowden-Extruder schneller und weniger anfällig für rissige Modelle, während der Direct-Drive-Extruder dafür flexible Materialien drucken kann und das Setup und der Materialwechsel hier deutlich einfacher sind.

### Fehler beim 3D-Druck

Die Qualität des gedruckten Objekts hängt von verschiedenen Faktoren, wie z.B. der Schichtdicke, der Temperatur des Extruders, der Geschwindigkeit des Druckkopfes und der Art des verwendeten Filaments, ab. 
Dadurch kann es zu einigen Fehlern beim drucken kommen. 3 Gängige Fehler sind:

- Warping: Der Druck hebt sich an Ecken vom Boden ab, verzieht sich und wölbt sich nach oben. Dagegen kann helfen, die Temperatur des Druckbetts zu erhöhen oder zusätzlichen Kleber zu verwenden.
- Bridging: Der Drucker druckt Verbindungen zwischen zwei Punkten, wie zum Beipsiel eine Brücke auf zwei Brückenpfeiler. Dadurch muss quasi in die Luft gedruckt werden. Dabei neigt die Verbindung bei großen Abständen dann oft zum durchhängen. Um das zu verhindern müssen gleich mehrere Dinge beachtet werden: Die Layer Höhe muss verringert werden, die Geschwindigkeit muss verringert werden und die Kühlung muss erhöht werden.
- Blobs: Der Druck bekommt unschöne Kanten oder Hubbel an einer Stelle. Das kann verhindert werden, indem die Layer Start- und Stoppositionen randomisiert werden.





