# NedapOnsApi.DossierRestrictiveMeasureEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expertiseProfile** | **Number** | Optional expertise profile that can apply the measure | [optional] 
**frequency** | **String** | Optional frequency the restrictive measure should be applied | [optional] 
**frequencyNarrative** | **String** | Optional explanation of the frequency | [optional] 
**frequencyUnit** | **Number** | Optional the unit of the frequency with this structural measure is applied. &lt;pre&gt; Possible values: - 0 daily - 1 weekly - 2 monthly - 3 yearly &lt;/pre&gt; | [optional] 
**frequencyAmount** | **Number** | Optional the frequency with which this structural measure is applied. | [optional] 
**durationAmount** | **Number** | The duration of the application of the structural measure application. | [optional] 
**narrative** | **String** | Optional additional explanation for this restrictive measure | [optional] 
**snomedExpressionValue** | **String** | Optional snomed expression of the restrictive measure | [optional] 
**deviceBuilders** | [**[DossierMedicalDeviceBuilder]**](DossierMedicalDeviceBuilder.md) | Optional device builder to build the restrictive measure relation | [optional] 
**device** | [**DossierMedicalDevice**](DossierMedicalDevice.md) |  | [optional] 
**typeAgreement** | **Boolean** | Optional whether a client or representative agrees with this measure | [optional] 
**typeResistant** | **Boolean** | Optional whether a client resists this measure | [optional] 
**ordinal** | **Number** | Optional the ordinal number of this measure in a restrictive measure care plan entry | [optional] [default to 0]
**ambulatoryCaregivers** | **Number** | Optional if this measure is applied in an ambulatory situation: the minimum amount of caregivers that are required to apply this measure | [optional] 
**fixedBeginTime** | **String** | Optional if this measure is applied at fixed times: when the application of this measure should begin | [optional] 
**fixedEndTime** | **String** | Optional if this measure is applied at fixed times: when the application of this measure should end | [optional] 
**categoryCode** | **String** | The code of the category the measure belongs to | [optional] 
**duration** | **String** | Optional duration | [optional] 
**instruction** | **String** | Optional instruction (original usage) Repurposed to be a combined \&quot;toelichting\&quot; field (includes \&quot;Proportionality\&quot;, \&quot;Subsidiarity\&quot;, \&quot;Effectiveness\&quot;, and possibly \&quot;Safety\&quot;) | [optional] 
**applicable** | **Boolean** | Optional whether the measure is applicable | [optional] 
