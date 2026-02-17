# NedapOnsApi.ArrangementIntent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | UUID identifying this Intent across applications | 
**timelineUuid** | **String** | UUID for the timeline that groups this Intent with other Intents | 
**clientUuid** | **String** | The client UUID of the client for which this Intent is intended | 
**clientId** | **Number** | The client ID of the client for which this Intent is intended | 
**beginDate** | **Date** | The date at which this Intent is beginning | 
**endDate** | **Date** | The date at which the Intent ends, or &lt;code&gt;null&lt;/code&gt; if it does not end | [optional] 
**hourTypeId** | **Number** | The HourType of the Intent | 
**frequency** | **Number** | The number of times this intent is present within the recurrence interval. It can be seen as the multiplier of the quantity. For example in &#x27;3 times 4 hours every week&#x27;, 3 is the frequency. | 
**quantityAmount** | **Number** | The amount matching the quantity | 
**quantityUnit** | [**ArrangementQuantityUnit**](ArrangementQuantityUnit.md) |  | 
**recurrenceInterval** | **Number** | The recurrence interval | 
**recurrenceType** | [**ArrangementRecurrenceType**](ArrangementRecurrenceType.md) |  | 
**sourceApp** | **String** | The app that created this intent. Apps should use upper case names to identify themselves and never change this. | 
**sourceReference** | **String** | The reference to this intent. The exact meaning is application specific. | [optional] 
**sourceDescription** | **String** | Free text description. | [optional] 
**splittable** | **Boolean** | Whether this intent may be split across multiple agenda entries when planning it. | [optional] 
**title** | **String** | The title of this intent. | [optional] 
**description** | **String** | The description of this intent. | [optional] 
**plannable** | **Boolean** | Whether this intent plannable; | [optional] 
