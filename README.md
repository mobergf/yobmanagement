# yobmanagement
Job application, HR management webapp built on strapi and nextjs

	1. Klona repot
	2. Använd node 14.16.1 (har inte kollat exakt vilka som funkar, men den har jag använt)
	3. Stå i yobmanagement och kör yarn
	4. Gå till /backend och kör yarn (installerar strapi-cms)
	5. Gå till  /frontend och kör yarn (installerar next)
	6. Gå till yobmanagement och kör yarn develop -> gå till localhost:1337 och skapa användare eller logga in
	7. Grunden är baserad på en strapi-template, därför kommer cms:et se lite annorlunda ut, articles och categories kommer finnas men dom kan tas bort, inga applicants eller stages kommer finnas
	8. För att alla APIer ska funka måste man ställa in public-inställningar, gå till Settings -> under Users & Permissions -> Roles -> Public -> klicka Select all på alla för enkelhetens skull
	9. För att kunna skapa användare via hemsidan måste minst en "Stage" finnas i strapi
	10. Create (under Single Types) måste ha en heading och vara published
  
## Voila! Ingångar i navigationen skapas automatiskt när du skapar nya stages
