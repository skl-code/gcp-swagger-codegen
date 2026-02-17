# NedapOnsApi.FinanceFinanceType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**externalCode** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**userIdentifier** | **String** | Short description | [optional] 
**beginDate** | **Date** |  | [optional] 
**endDate** | **Date** |  | [optional] 
**systemDefined** | **Boolean** | Indicates if this FinanceType was created by Nedap (&#x3D;true) or if this was manually created (&#x3D;false) | [optional] 
**covRequired** | **Boolean** |  | [optional] 
**agbSelectionEnabled** | **Boolean** | Indicates if the agbcode can be manually selected (&#x3D;true) | [optional] 
**cakDelivery** | **Boolean** | Indicates if this FinanceType is eligible (&#x3D;true) for the CAK delivery | [optional] 
**useWmoNumbering** | **Boolean** | Indicates if this FinanceType has a beschikkingsnummer/aanvraagnummer/indicatie orgaan | [optional] 
**zzpAllowed** | **Boolean** | Indicates if this FinanceType is allowed to have ZZP products | [optional] 
**shape** | [**FinanceShape**](FinanceShape.md) |  | [optional] 
**colorHex** | **String** | This is color of the shape of the icon used in Administration | [optional] 
**timeRange** | **Boolean** | If this is true this finance type works with klassen otherwise this financetype works with a timerange | [optional] 
**category** | **Number** | &lt;pre&gt; Possible values: 0 - Overig 1 - AWBZ extramuraal 2 - AWBZ intramuraal 3 - WMO 4 - PGB 5 - Onderaannemer 7 - Jeugdwet 9 - Eigen risico 10 - ZVW 11 - GGZ &lt;/pre&gt; | [optional] 
