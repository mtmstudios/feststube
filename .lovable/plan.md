
## DNS TXT-Record für Google Search Console Verifizierung

Du musst einen **TXT-Record** bei Mittwald hinzufügen, um die Google Search Console Verifizierung über DNS zu bestätigen.

### Konfiguration bei Mittwald:

| Typ | Name | Wert |
|-----|------|------|
| **TXT** | **@** (oder leer/feststube.de) | `google-site-verification=uotE1c0dvjbp9XN_1gelVyBezhaBqf4zW8svrA6wJks` |

### Wichtige Hinweise:
- **Name**: Bei manchen DNS-Interfaces musst du `@` eingeben, bei anderen lässt du das Feld leer für die Root-Domain
- **Wert**: Der komplette String inklusive `google-site-verification=`
- **Propagationszeit**: Wie alle DNS-Änderungen kann dies bis zu 72 Stunden dauern

### Schritte:
1. Logge dich bei Mittwald ein
2. Gehe zu den DNS-Einstellungen für feststube.de
3. Füge einen neuen TXT-Record hinzu mit:
   - Type: TXT
   - Name: @ (oder leer lassen)
   - Value: `google-site-verification=uotE1c0dvjbp9XN_1gelVyBezhaBqf4zW8svrA6wJks`
4. Speichern und warten auf DNS-Propagation
5. In der Google Search Console auf **"Verifizieren"** klicken

Hast du schon die **Sitemap.xml** bei Google Search Console eingereicht? Das sollte der nächste Schritt nach der Verifizierung sein.
