# NedapOnsApi.DbcGgzDiagnoseToekenning

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Object identifier | [optional] 
**externalId** | **Number** | Link a diagnosetoekenning to the original dsm classification series in ons-dossier. | [optional] 
**primair** | **Boolean** | Indicate that this object is the primary part of a set. One DSM classification can contain a list of DiagnoseToekenningen. Only one of them can be primary | 
**trekkenVan** | **Boolean** | To indicate that the client has &#x27;signs of&#x27; a diagnosis. This is used when the user is not sure of the diagnosis. | [optional] 
**datum** | **Date** | The date at which the diagnosis took place | 
**diagnoseAs** | **Number** | Possible values: 1,2,3,4,5 &lt;p&gt; A DSM 4 classification consists of 5 axis. The speficication says: &lt;p&gt; 1 Klinische stoornis (bijv. depressie) 2 Persoonlijkheidsstoornissen (bijv. afhankelijke persoonlijkheidsstoornis) 3 Lichamelijke aandoeningen (relevant voor het begrijpen of behandelen van een psychische stoornis) (bijv. migraine) 4 Psychosociale en omgevingsfactoren (bijv. scheiding, werkeloosheid ) 5 Algehele beoordeling van het functioneren (Global Assement of Functioning Scale, GAF) uitgedrukt op een schaal van 0 tot 100 | [optional] 
**diagnoseCode** | [**DbcGgzDiagnose**](DbcGgzDiagnose.md) |  | [optional] 
**zorgtrajectId** | **Number** | Object identifier for the corresponding Zorgtraject | [optional] 
