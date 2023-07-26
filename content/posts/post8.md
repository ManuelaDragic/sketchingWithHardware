---
title: "01. Semesterverlauf"
date: 2023-07-04T14:54:18+01:00
draft: false
---

### Rückblick
Zu Beginn des Semester ging es nach einer kurzen Einführung direkt auf die Suche nach einer Projektidee. Dazu wurden uns "Must-Haves" und "Should-Haves" vorgestellt, welche wir weitesgehend in unseren Projekten umsetzen sollten. 

Da ich noch immer beigstert vom Design der WordClock war, entschied ich mich dafür, eine erweiterte Version der Wordclock zu bauen: Den WordClockanizer. 
Dieser sollte neben der Uhrzeit noch den Wochentag, die Kalenderwoche und die Termine meines Apple-Kalenders der kommenden 7 Tage anzeigen. 
Um die Kalenderdaten auszulesen, überlegte ich mir, meinen Apple-Kalender zunächst einmal in einen Google-Kalender zu übertragen und diesen dann mithilfe der API auszulesen. Die Kalenderdaten sollten auf einem Display oder als Lauftext auf LED-Matrizen angezeigt werden.
Unsere Projekt-Idee und einen groben Zeitplan sollten wir dann beim Projekt-Pitch vorstellen.

Zudem wurden uns einige Tools an die Hand gegeben, welche wir verwenden durften um unser Projekt zu planen. Ich entschied mich zunächst einmal für Notion, da ich damit bereits gearbeitet hatte, jedoch merkte ich sehr schnell, dass der klassische Weg mit Post-Its, Kalender, Notizen und Checkliste sich besser für mich eignete. Somit plante ich mein komplettes Projekt letztendlich ohne die vorgestellten Tools.

Nach abgeschlossener Planung ging es dann direkt ins Labor, um eine Teileliste für das Projekt und eine grobe Skizze zu entwerfen.

{{< figure src="../pictures/skizze1.jpg" width="60%"height="60%">}}

{{< figure src="../pictures/skizze2.jpg" width="100%"height="60%">}}

### Projektphase

Der WordClockanizer sollte aus 3 Schichten bestehen: Einer Vorderseite aus Holzfurnier, einem 3D-gedruckten Rahmen und einer 3D-gedruckten Rückseite. 
Der Plan war, dass sowohl die LED-Matrizen als auch die Buchstaben der Wordclock durch das Furnier scheinen, jedoch zeigte sich später, dass das Furnier ebenfalls cutten musste. 
Das Furnier sollte dann auf den Rahmen geklebt werden, welcher aus schwarzem Fillament gedruckt werden sollte.
In den unteren Abschnitt des Rahmens sollte eine 3D-gedruckte Matrizenhalterung samt LED-Matrizen eingesetzt werden, in den oberen Abschnitt eine lasergecuttete Buchstabenplatte samt LED-Stripe.
Dazu sollten die Buchstaben der Wordclock in 3mm dicke Spanplatten gecuttet werden. Damit die LED's nur durch die jeweils richtigen Buchstaben leuchten, musste ich dann noch ein Raster und eine Halterung für den LED-Stripe erstellen. 
Das Raster sollte aus schwarzem Fillament 3D-gedruckt werden. In das Raster sollten dann 3D-gedruckte Quadrate aus transparentem Fillament eingesetzt werden, um das Licht etwas zu streuen und gleichzeitig die Lämpchen zu verstecken.
Für die LED-Stripe-Halterung überlegte ich mir Schlitze in eine weitere Spanplatte zu cutten, sodass der LED-Stripe einfach durchgefädelt werden konnte. 
Die Rückseite sollte dann aus durchsichtigem Fillament 3D-gedruckt werden und anschließend mit dem Rahmen verschraubt werden.
Das Projekt sollte außerdem noch einige weitere Features bieten. So wollte ich die Farben der Uhr mit einem Button wechseln können. Zudem sollte die Uhr natürlich möglichst stromsparend sein. Um dies zu erreichen wollte ich zum Beispiel, dass die Uhr, je nach Helligkeit, von selbst heller und dunkler wird. Zudem sollte man einzelne Komponenten, wie die LED-Matrizen oder das geplante Ambient-Light seperat ein- und ausschalten können.
Um die gesamte Uhr auszuschalten sollte dann noch ein Kippschalter angebracht werden.

##### 3D-Modelle
{{< figure src="../pictures/rahmen.png" width="60%"height="60%">}}
{{< figure src="../pictures/matrizenhalterung.png" width="60%"height="60%">}}
{{< figure src="../pictures/raster.png" width="60%"height="60%">}}
{{< figure src="../pictures/raster_innen.png" width="60%"height="60%">}}
{{< figure src="../pictures/hinten.png" width="60%"height="60%">}}

##### Lasercut
{{< figure src="../pictures/lasercut1.jpeg" width="60%"height="60%">}}

Während ich auf die erste Bestellung wartete, erstellte ich die Modelle der Matrizenhalterung und des Rasters, sowie die Datei um die Buchstabenplatte zu cutten.
Dann ging es auch schon ans Coden der ersten Komponenten. Ich schrieb zunächst einmal einen Codeschnipsel zum testen des LED-Stripes und der LED Matrizen, welchen ich nach Ankunft der Teile sofort testete. 
Der Code für den LED-Stripe funktionierte auf anhieb, während der Code für die LED Matrizen Probleme machte.
Da ich Bibliotheken verwendete, welche nicht mit meinem ESP kompatibel waren, musste ich den Code also umschreiben und eine andere Bibliothek verwenden. 
In der Zwischenzeit startete ich schonmal den Druck der ersten Komponenten und cuttete mit dem Lasercutter die Buchstabenplatte. 

{{< figure src="../pictures/druck.jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/lasercut2.jpeg" width="60%"height="60%">}}

Das cutten nahm etwa 7 Stunden in Anspruch, weshalb ich währenddessen weiter am Code schreiben konnte.
Um die genaue Uhrzeit zu bekommen und später auf dem LED-Stripe anzuzeigen, verwendete ich ein RTC-Modul. Der Code dafür war relativ simpel, da man die LED's nur zur jeweiligen Uhrzeit ein- und ausschalten musste. 
Der Code für die Kalenderdaten gestaltete sich dafür aber umso schwieriger. 
Da man die Kalenderdaten nicht so einfach direkt aus dem Apple-Kalender auslesen konnte, musste ich meinen Kalender zunächst in einen Google-Kalender übertragen.
Die Daten werden dann mit einem Google Apps Skript ausgelesen und anschließend bereitgestellt.
Da die Matrizen nicht mit Umlauten umgehen konnten, mussten diese dann noch herausgefiltert und ersetzt werden. 
Zudem wandelte ich die Buchstaben hier in Großbuchstaben um, sodass sie später besser zur Font der Wordclock passten. 
Ebenso passte ich deshalb auch die Font der LED-Matrizen an.

##### Kalenderdaten

{{< figure src="../pictures/kalender_desktop.png" width="100%"height="60%">}}
{{< figure src="../pictures/applekalender.png" width="60%"height="60%">}}
{{< figure src="../pictures/kalenderdaten.png" width="60%"height="60%">}}

##### Font

{{< figure src="../pictures/font.png" width="100%"height="80%">}}


Als letztes programmierte ich dann noch 3 Buttons und einen Helligkeitssensor.
Mit einem der Buttons sollte das Ambient-Light, mit einem weiteren Button die LED-Matrizen ein- und ausgeschaltet werden können.
Der dritte Button sollte die Farben der LED's verändern und der Helligkeitssensor sollte die Helligkeit der LED's zur jeweiligen Tageszeit anpassen.
Da ich jedoch nur noch zwei Pin's, einen digitalen und einen analogen, zur Verfügung hatte, musste ich dabei etwas improvisieren.
Um die verschiedenen Signale zu erfassen verwendete ich mehrere verschiedene Widerstände, die zwischen Buttons und den Helligkeitssensor gelötet wurden. Somit konnte ich dann zwei Butons und den Sensor an den analogen Pin anschließen. Der letzte Button wurde einfach an den digitalen Pin angeschlossen.


### Fertigungsverfahren

Für mein Projekt verwendete ich verschiedene Fertigungsverfahren. Während einige Teile des Gehäuses 3D-gedruckt wurden, wurden andere Teile lasergecuttet. 
Der 3D-Druck hatte hierbei vorallem den Vorteil, dass man größere Teile unbeaufsichtigt drucken lassen konnte. Zudem konnten die Teile auf Millimeter genau gefertigt werden. In der Praxis machten die Drucker jedoch häufiger Probleme, sodass manche Drucke mehrmals gestartet werden mussten, bis man ein brauchbares Bauteil bekam. Ein weiterer Nachteil war dabei, dass die Drucke im Nachhinein nicht mehr wirklich bearbeitet werden konnten, falls es an manchen Stellen zu Ungenauigkeiten kam.

Der Lasercutter hingegen musste die ganze Zeit über beobachtet werden, sodass man in der Zwischenzeit nicht einfach weggehen konnte. Die Buchstabenplatte musste so z.B ganze 8 Stunden lang beobachtet werden.
Ein Vorteil des Lasercutters war jedoch, dass dieser die Teile bei richtiger Einstellung immer genau cuttete. Zudem konnten die Spanplatten im Nachhinein noch geschliffen oder gesägt werden, falls etwas doch nicht ganz passte.



### Motivation, Fazit und Feedback

Da ich bereits lange Zeit plante die WordClock zu bauen, war die Motivation natürlich sehr groß, so verbrachten wir 6 Wochen lang fast Tag und Nacht im Labor, um an unseren Projekten zu basteln. Der Gedanke, die selbstgebaute Uhr später im Zimmer stehen zu haben, erhöhte die Motivation zudem enorm.

Aus Sketching with Hardware nehme ich vorallem mit, wie viel Spaß die Kombination aus Software und Hardware machen kann. Da wir im Studium bisher kaum praktische Anteile hatten und diese dann nur Softwareseitig waren, war es eine tolle Abwechslung auch mal mit der Hardware in Berührung zu kommen. 
Persönlich nehme ich vorallem mit, wie viel Spaß es macht selbst eigene Projekte umzusetzen und sich Soft- und Hardwareseitig mit Problemstellungen auseinander zu setzen. Nach Sketching with Hardware bin ich nun dazu in der Lage, auch komplexere Projekte selbstständig umzusetzen.
Auch für meine berufliche Zukunft glaube ich, dass es sicherlich von Vorteil war, diese Schnittstelle zwischen Soft- und Hardware kennengelernt zu haben.
Außerdem ist es bestimmt von Vorteil, mit einem Lötkolben, 3D-Drucker und Lasercutter umgehen zu können.

Alles in allem bin ich sehr zufrieden mit dem Kurs und auch mit meinem fertigen Projekt. 
Für zukünftige Jahrgänge wünsche ich mir eventuell neue 3D-Drucker, um den zukünftigen Teilnehmern die Arbeit zu erleichtern. Zudem wäre es toll mehrere, gut funktionierende Lötkolben zu haben. Bei einigen wurden die Spitzen, auch wenn leider erst sehr spät, jedoch schon ausgewechselt.
Der größte Kritikpukt in diesem Semester war jedoch die sehr knapp bemessene Zeit, die wir für unsere Projekte hatten.
So wurde ich, trotz straffem Zeitplan und fast täglichen Nachtschichten im Labor, zum Beispiel erst kurz vor der Vorstellung des Projekts fertig. 

Der Projekt-Pitch war erst Anfang Mai, sodass wir bis zur Vorstellung der Projekte leider nur 6 Wochen hatten.
Eine Idee wäre, die Themenwahl und den Projekt-Pitch schon auf das Ende des ersten Semesters zu schieben, sodass das Projekt schon über die Semesterferien geplant werden kann und direkt zu Semesterbeginn mit dem Projekt gestartet werden kann. 
Die klare Trennung von Theorie im ersten Semester und dem großem Projekt im zweiten Semester waren sehr Hilfreich. Das Übungsprojekt im ersten Semester hat zudem schonmal einen guten Einblick in mögliche Probleme für das große Projekt gegeben.

Sketching with Hardware ist und wird das Highlight meines Studiums bleiben. Nicht nur dank meiner Kommilitonen, sondern auch dank Ali werde ich das Fach lange mit guten Erinnerungen im Hinterkopf behalten.


### Projekt: WordClockanizer

Der "WordClockanizer" sollte das klassische Design einer WordClock mit einem intelligenten Kalender verbinden, um einen Überblick über anstehende Termine zu ermöglichen. 
Eine WordClock ist eine Uhr, die anstelle von Zahlen Wörter oder Buchstaben verwendet, um die Uhrzeit anzuzeigen. 
Indem die Idee mit einem intelligenten Kalender verknüpft wird, schafft sie eine neue und einzigartige Anwendung für ihre Benutzer.

#### Features

- **WordClock**: Der obere Teil des WordClockanizers zeigt mithilfe von LED'S den Wochentag und die Uhrzeit in Worten an. Die genaue Uhrzeit wird durch ein RTC-Modul beibehalten, welches eine eigene Batterie verwendet, sodass die Uhrzeit auch richtig angezeigt wird, falls die Stromverbindung einmal getrennt wird.

- **Kalender**: Im unteren Teil werden die Termine der nächsten 7 Tage des Apple- oder Google-Kalenders als Lauftext auf LED-Matrizen angezeigt. Der Kalender wird zwei mal täglich aktualisiert, sodass er immer aktuell ist.

- **Farbwechsel**: Mit einem Button an der oberen Seite des WordClockanizers kann die Farbe der LED's gewechselt werden.

- **Ambient-Light**: Das integrierte Ambient-Light schafft Behaglichkeit und Atmosphäre. Die Farbe des Ambient-Lights wird analog zur Farbe der WordClock gewechselt.

- **Stromsparend**: Mit einem Kippschalter kann die gesamte Uhr ein- und ausgeschaltet werden. Zudem können das Ambient-Light sowie die LED-Matrizen mit einem Button seperat ein- und ausgeschaltet werden. Ein Helligkeitssensor passt zusätzlich die Helligkeit der WordClock und der LED-Matrizen automatisch an.

- **Zugänglichkeit**: Die Rückseite der Wordclock ist mit dem Rahmen verschraubt, sodass die Technik leicht zugänglich ist. So können z.B. die Batterie des RTC-Moduls oder der LED-Stripe leicht ausgetauscht werden.


Alle Features waren zum Zeitpunkt der Abschlusspräsentation bereits funktionsfähig, sodass im Nachhinein nichts mehr angepasst werden musste.
Lediglich der Rahmen der Uhr wurde neu gedruckt, da dieser Ursprünglich aus 3 Teilen bestand.

#### Alter Rahmen
{{< figure src="../pictures/Rahmen_oben(alt).jpeg" width="60%"height="60%">}}
{{< figure src="../pictures/Rahmen_rechts(alt).jpeg" width="60%"height="60%">}}


#### Neuer Rahmen
(Oberseite mit ON/OFF Kippschalter, Helligkeitssensor und Farbwechselbutton)
{{< figure src="../pictures/Rahmen_oben(neu).jpeg" width="60%"height="60%">}}

(Rechte Seite mit Button für Ambient-Light und LED-Matrizen)
{{< figure src="../pictures/Rahmen_rechts(neu).jpeg" width="60%"height="60%">}}

(Linke Seite mit Anschluss für Netzteil)
{{< figure src="../pictures/Rahmen_links(neu).jpeg" width="60%"height="60%">}}

#### Vorderseite
{{< figure src="../pictures/Wordclock.jpeg" width="60%"height="60%">}}

#### Funktionen
{{< figure src="../pictures/Funktionen.mov" width="60%"height="60%">}}
{{< figure src="../pictures/Wordclock.mov" width="60%"height="60%">}}









