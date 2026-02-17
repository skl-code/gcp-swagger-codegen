# NedapOnsApi.DbcGgzValidationError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Object identifier | [optional] 
**subtrajectId** | **Number** | The object identifier of the DBC/DBBC (Subtraject) this validation error belongs to. | 
**type** | **String** | Possible values: DBC_SPELREGEL (Validation error for NZA spelregels) SYNC_CAREORDERPRODUCT (Synchronization of general DBC/DBBC financial information) SYNC_FORENSIC_CAREORDER (Synchronization of FZ DBBC) SYNC_BEHANDELAAR (The employee information could not be synced) | 
**severity** | **String** | Possible values: ERROR WARNING | [optional] 
**message** | **String** | The message (in Dutch) | [optional] 
