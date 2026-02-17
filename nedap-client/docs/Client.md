# NedapOnsApi.Client

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**givenName** | **String** | The given name (roepnaam) of the client. | [optional] 
**civilStatus** | **Number** | The civil status of the client. Allowed values: 0: Unknown 1: Unmarried and never had registered partnership 2: Married 3: Divorced 4: Widow 5: Registered partnership 6: Divorced but has registered partnership 7: Widow but has registered partnership 8: Unmarried and no registered partnership 9: Unmarried and no registered partnership, but had once a registered partnership | [optional] 
**civilStatusDate** | **Date** | The date from which the civil status applies. | [optional] 
**deathDate** | **Date** | The date the client passed away. | [optional] 
**hometown** | **String** | The home town of the client. | [optional] 
**nationality** | **String** | The nationality of the client, as a 2-letter ISO3166 country code. | [optional] 
**language** | **String** | The language of the client, as a ISO 639-1 language code. | [optional] 
**religion** | **String** | The religion of the client. | [optional] 
**addressString** | **String** | Deprecated, this field is never set. | [optional] 
**match** | **String** | Deprecated, this field is never set. | [optional] 
**careAllocations** | [**[CareAllocation]**](CareAllocation.md) | All care periods for this client. | [optional] 
**careAllocationBeginDate** | **Date** | The begin date of the current of most recent past care allocation. Deprecated, use careAllocations. | [optional] 
**careAllocationEndDate** | **Date** | The end date of the current or most recent past care allocation. Deprecated, use careAllocations. | [optional] 
**careAllocationReason** | **String** | The end of care reason of the current or most recent past care allocation. Deprecated, use careAllocations. | [optional] 
**secretClient** | **Boolean** | Indicates if this client is secret. | [optional] 
**uuid** | **String** | Type 4 Universally Unique Identifier of the client. | [optional] 
**levelOfEducation** | **String** | Level of education of the client. Allowed values are: 10: Onderwijs aan kleuters 20: Primair Onderwijs (omvat codes 10 en 20) 30: VMBO (omvat codes 31, 32 en 33) 31: Secundair onderwijs, eerste fase, Laag 32: Secundair onderwijs, eerste fase, Midden 33: Secundair onderwijs, eerste fase, Hoog 40: HAVO, VWO, MBO (omvat codes 41, 42 en 43) 41: Secundair onderwijs, tweede fase, Laag 42: Secundair onderwijs, tweede fase, Midden 43: Secundair onderwijs, tweede fase, Hoog 50: Bachelor (omvat codes 51, 52 en 53) 51: Hoger onderwijs, eerste fase, Laag 52: Hoger onderwijs, eerste fase, Midden 53: Hoger onderwijs, eerste fase, Hoog 60: Master (omvat codes 60 en 70) 70: Hoger onderwijs, derde fase 99: Onbekend | [optional] 
**livingSituation** | **String** | Living situation of the client. Allowed values are: 10: Alleenstaand 20: Zonder partner, met kinderen 30: Met partner, zonder kinderen 40: Met partner, met kinderen 70: Optioneel: Niet-ggz-institutie 80: Optioneel: Ggz-institutie 90: Optioneel: Zwervend, dakloos 97: Anders 99: Onbekend | [optional] 
**skn** | **String** | The strafrechtketennummer, max 15 numeric characters. | [optional] 
**pronouns** | [**Pronouns**](Pronouns.md) |  | [optional] 
**preferredName** | **String** | Fullname which is preferred above the official name. Max 200 characters. | [optional] 
**genderIdentity** | [**GenderIdentity**](GenderIdentity.md) |  | [optional] 
