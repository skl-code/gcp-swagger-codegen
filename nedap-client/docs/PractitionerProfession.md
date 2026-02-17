# NedapOnsApi.PractitionerProfession

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**employeeObjectId** | **Number** | Id referring to the Employee object | [optional] 
**code** | **String** | Profession code from the code list indicated in typeCode. | [optional] 
**name** | **String** | Abbreviated name for the profession | [optional] 
**info** | **String** | Full description for the profession | [optional] 
**type** | **String** | Indicates the codelist this profession orginates from Please use #professionType instead | [optional] 
**professionType** | [**PractitionerProfessionType**](PractitionerProfessionType.md) |  | [optional] 
**beginDate** | **Date** | The date at which the profession is beginning | 
**endDate** | **Date** | The date at which the profession is ending. Null means no ending. | [optional] 
