# Business Rules

## General Device Rules

1. A device must have a unique deviceId
2. A device must have a type, brand, and model
3. A device must have a status (e.g., active, inactive)
4. A device can be online or offline
5. A device must have a location
6. A device must have an installationDate
7. A device must have a lastUpdate timestamp
8. A device must have a name

---

## Device Specialization Rules

9. A device must belong to only one specific subtype (Light, Thermostat, Lock, TV, AirConditioner, Computer, Speaker)

10. Each subtype must reference a valid deviceId from Devices

---

## Light Rules

11. A light must have a brightness value
12. A light can have a color
13. A light can have a mode

---

## Thermostat Rules

14. A thermostat must have a temperature value
15. A thermostat must have humidity data
16. A thermostat can define a targetTemperature
17. A thermostat can enable ecoMode

---

## Lock Rules

18. A lock must define if it is locked or unlocked
19. A lock must have a lockType
20. A lock can enable autoLock

---

## Lock Security Rules

21. A lock can have security settings
22. LockSecurity must reference a valid deviceId from Lock
23. LockSecurity must store an encryptedAccessCode
24. LockSecurity must track lastRotation date

---

## TV Rules

25. A TV must have volume level
26. A TV must define resolution
27. A TV must define inputSource

---

## Air Conditioner Rules

28. An air conditioner must have temperature control
29. An air conditioner must define mode
30. An air conditioner can enable ecoMode

---

## Computer Rules

31. A computer must define operatingSystem
32. A computer must define RAM size
33. A computer must define storage capacity

---

## Speaker Rules

34. A speaker must define volume level
35. A speaker can be muted or unmuted
36. A speaker must define connectivity type

---

## User Registration Rules

37. A user must have a unique email
38. A user must have a password
39. A user must be linked to a device
