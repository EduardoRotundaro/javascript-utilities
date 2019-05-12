# Javascript Utilities

Some functions and constants for Javascript projects.

---

## Formatters

Date

```sh
> dateFormat('$Dn/$Mn/$Yn, $hn:$mn.', new Date())
02/05/19, 22:05.
```


Date (time)

```sh
> dateTime(new Date())
À 2 minutos
```


JSON

```sh
> json("{"key":"value"}")
{
    key: "value"
}
```


CPF

```sh
> cpf('01234567890')
012.345.678-90
```


CNPJ

```sh
> cnpj('00000000000191')
00.000.000/0001-91
```


## Constants

Months

```sh
['Janeiro', 'Fevereiro', ...]
```


Months short

```sh
['Jan', 'Fev', ...]
```


Week days

```sh
['Domingo', 'Segunda-feira', ...]
```


Week days short

```sh
['Dom', 'Seg', ...]
```


Country states

```sh
['AC', 'AL', ...]
```

## Functions

Check if is Number

```sh
> isNumber('123')
true
```


Check if data is empty

```sh
> isEmpty({})
true
```


