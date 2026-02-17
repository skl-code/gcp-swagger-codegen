# NedapOnsApi.EvsResponseMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | UUID identifying this Evs response across applications | 
**originalMessageTag** | **String** | link to the orignal message where this response belongs to | [optional] 
**status** | **String** | possible values: ACKED: when the hl7 message was received correctly by the external EVS provider NACKED: when the hl7 was denied by the external EVS provider | [optional] 
**externalMessage** | **String** | The textual message from the external EVS provider. In case of status NACKED, this will given an indication of the reason why. | [optional] 
