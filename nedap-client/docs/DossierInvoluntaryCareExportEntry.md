# NedapOnsApi.DossierInvoluntaryCareExportEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceId** | **Number** | The id of the source object for this export entry. It is not unique, because a single source can generate multiple export entries | [optional] 
**sourceType** | **String** | The type of source this export entry was generated from, possible values: - registration - care_plan_entry | [optional] 
**clientExternalId** | **Number** | The id of the client this export entry is linked to | [optional] 
**locationId** | **Number** | The location this measure was applied | [optional] 
**locationNumber** | **String** | The KvK vestigingsnummer for the location this export entry was linked to | [optional] 
**careType** | **Number** | Optional in case of Wzd, the type of care: - 1 structural and plannable - 2 structural not plannable - 3 unforseen | [optional] 
**interventionType** | **String** | The type of involuntary care that was applied, possible values depend on the law and can be found in the ZIB that defines it: For Wzd Measures https://zibs.nl/wiki/VrijheidsbeperkendeInterventie-v1.0(2020NL)#SoortInterventieWzdCodelijst For Wvggz Measures https://zibs.nl/wiki/VrijheidsbeperkendeInterventie-v1.0(2020NL)#SoortInterventieWvggzCodelijst | [optional] 
**legalSituation** | **String** | The legal situation of the client, possible values from the ZIB: https://zibs.nl/wiki/JuridischeSituatie-v2.0(2020NL) | [optional] 
**beginSelfBinding** | **Date** | Optional, only for Wvggz, the begin date of a self binding declaration | [optional] 
**endSelfBinding** | **Date** | Optional, only for Wvggz, the end date of a self binding declaration | [optional] 
**beginDate** | **Date** | The begin date of the registration | [optional] 
**endDate** | **Date** | Optional, the end date of the registration | [optional] 
**durationAmount** | **Number** | Optional, the average and/or rounded duration of the application of the care | [optional] 
**frequencyAmount** | **Number** | Optional, the amount of times this measures was applied, goes with frequencyUnit | [optional] 
**frequencyUnit** | **Number** | Optional, goes with frequencyAmount, possible values; - 1 daily - 2 weekly - 3 monthly - 4 yearly | [optional] 
**ambulatory** | **Boolean** | Whether or not the client was in the ambulatory setting when this measure was applied. | [optional] 
