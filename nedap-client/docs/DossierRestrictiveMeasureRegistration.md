# NedapOnsApi.DossierRestrictiveMeasureRegistration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The id of this registration | [optional] 
**restrictiveMeasureEntryId** | **Number** | Optional linked restrictive measure entry from the care plan | [optional] 
**restrictiveMeasureId** | **Number** | The applied restrictive measure | [optional] 
**law** | **Number** | The law that was valid when this measure was applied - 0 Bopz - 1 Wzd - 2 Wvggz - 3 Wzd with fz | [optional] 
**narrative** | **String** | Optional narrative that was recorded during the registration | [optional] 
**resistant** | **Boolean** | Whether there was resistance during the application of this measure | [optional] [default to false]
**clientExternalId** | **Number** | The id of the client this registration is linked to | [optional] 
**legalTitle** | **String** | The legal title under which this measure was applied: - determine_later - care_authorization - crisis_measure - temp_unforeseen - temp_mandatory_before_cm - continuation_authorization - tbs_pij | [optional] 
**startTime** | **Date** | When the application of this measure started | [optional] 
**endTime** | **Date** | Optional when the application of this measure ended. | [optional] 
**createdAt** | **Date** | When this registration was created | [optional] 
**updatedAt** | **Date** | When this registration was last updated | [optional] 
**reportId** | **Number** | The id of the report that is linked to this registration | [optional] 
