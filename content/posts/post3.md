---
title: "03. Microcontroller Labor"
date: 2022-12-06T17:31:58+01:00
featured_image: "/pictures/microcontroller.jpeg"
draft: false
---

### Tag 1

Nach einer kurzen theoretischen Einführung ging es am ersten Tag direkt in den praktischen Teil über.
Wir bekamen eine Kiste mit verschiedenen Bauteilen und Sensoren, verschiedene Kabel, Widerstände und einen Arduino in die Hände gedrückt. 

Zum Einstieg sollten wir verschiedene Sensoren aus der Kiste nehmen und uns überlegen, was diese für eine Funktion haben könnten.

{{< figure src="../pictures/Baukasten.png" width="60%"height="100%">}}

Im Anschluss daran, ging es dann auch schon los mit unserem "ersten Programm".
Wir schlossen den Arduino an unsere Laptops an und starteten das Programm "Blink" - da blinkte auch schon die auf dem Arduino verbaute LED.

{{< figure src="../pictures/ErstesProgramm.mov" width="60%"height="100%">}}


Danach versuchten wir außerdem noch diverse externe LED´s anzuschließen. Dazu nahmen wir eine Steckplatine und ein paar Kabel zur Hilfe. 
Ich schaltete zunächst zwei LED´s in Reihe und anschließend parallel, wobei die parallel geschalteten LED´s natürlich viel heller leuchteten.

{{< figure src="../pictures/Reihenschaltung.mov" width="60%"height="100%">}}
{{< figure src="../pictures/Parallelschaltung.mov" width="60%"height="100%">}}

Im nächsten Schritt kamen dann erstmals die verschiedenen Sensoren zum Einsatz. 
Als erstes versuchte ich einen Touchensor zu benutzen. Bei Berührung sollte dieser eine LED ein- und ausschalten.

{{< figure src="../pictures/TouchSensor.mov" width="100%"height="100%">}}


Da der Sensor aber nur bedingt funktionieren wollte, musste ich mir etwas anderes einfallen lassen.
Ich stieg also auf einen einfachen Button um. 
Das Skript funktionierte auf Anhieb und die LED machte das was ich wollte.

{{< figure src="../pictures/Button.mov" width="100%"height="100%">}}



Zum Abschluss des ersten Tages versuchten wir noch zu Zweit einen Motor zum Laufen zu bekommen. 
Der Motor hatte zunächst aber andere Pläne und wollte wohl erst einmal testen, ob wir das Wissen der letzten Woche auch umsetzen konnten. Es lösten sich die Drähte, woraufhin diese wieder angelötet werden mussten.
Nach bestandener Zwischenprüfung ergab sich dann auch schon das nächste Problem: 
Leider bedachten wir nicht, dass der Arduino nicht genug Strom für den Motor lieferte.
Für eine etwas kompliziert Lösung fehlte uns dann die Zeit, weshalb wir das Projekt letzten Endes verwerfen mussten.


{{< figure src="../pictures/Motor.png" width="100%"height="100%">}}



### Tag 2

Am zweiten Tag des Microcontroller Labors wurden serielle Kommunikation und Interrupts besprochen.
Leider habe ich an diesem Tag nicht an der Vorlesung teilnehmen können, da ich krank war. Somit konnte ich kein neues Projekt beginnen.  



### Tag 3

Am letzten Tag durften wir uns nach einer abschließenden, kurzen Theorie-Stunde wieder dem Baukasten widmen. 
Ich entschied mich dafür, die serielle Kommunikation etwas zu vertiefen. Dazu nahm ich vier LED-Matrizen, welche ich miteinander verband.
Das Ziel war es, mit einer Bibliothek meinen Spitznamen abzubilden, was jedoch irgendwie nicht ganz klappen wollte. Statt Buchstaben erschienen einzelne leuchtende LED´s, welche aufgrund eines Wackelkontakts aber immer mal wieder verschwanden.

Letzten Endes entschied ich mich dann dazu, nur eine Matrix zu benutzen und die Bibliothek zu verwerfen. Die Verkabelung stellte sich als ziemlich einfach heraus.

{{< figure src="../pictures/Schaltung.png" width="100%"height="100%">}}

Da ich noch immer einen Buchstaben abbilden wollte, entschied ich mich dazu, ein "A" hart zu coden.
Mit folgendem Code kam ich endlich zu meinem Ziel:

{{< figure src="../pictures/Code.png" width="100%"height="100%">}}
{{< figure src="../pictures/Buchstabe.png" width="60%"height="100%">}}


### Funktionsweise und Nutzen von Interrupts und Sleep-Modis

Ein letztes wichtiges Thema bei der Benutzung von Microcontrollern sind Interrupts und Sleep-Modi.

Interrupts dienen zur zur Überwachung von auftretenden Events während der Laufzeit. Sobald ein Signal bemerkt wird, unterbricht ein Interrupt einen laufenden Prozess und führt eine vorgegebene Handlung aus. Im Anschluss daran springt er zum ursprünglichen Punkt zurück und setzt den unterbrochenen Prozess fort.

Der Vorteil daran: Interrupts machen den Prozessor für andere Dinge frei, während auf ein tatsächliches Ereignis gewartet wird. So muss im loop nicht ständig überprüft werden, ob sich etwas verändert hat!

{{< figure src="../pictures/Interrupts.png" width="70%"height="100%">}}


Sleep-Modi wiederum können den Prozessor in eine Art "Schlafmodus" versetzen. Der Vorteil ist vorallem Energie zu sparen, wenn gerade nichts passiert. Dazu gibt es folgende Methoden:

{{< figure src="../pictures/SleepModi.png" width="100%"height="100%">}}



