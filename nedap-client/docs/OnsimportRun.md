# NedapOnsApi.OnsimportRun

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Object identifier of the run, usually in the form of a UUID. | [optional] 
**name** | **String** | Name of the run. | 
**autoProcess** | **Boolean** | Indicates that records added to the run will be automatically matched and synchronized. | [optional] [default to true]
**quickMatch** | **Boolean** | Indicates that matching will be skipped for reference fields already containing database IDs. | [optional] [default to false]
