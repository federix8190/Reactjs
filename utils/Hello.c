#include <stdio.h>
#include <stdlib.h>

int main()
{
	int x[4];
   	int i;
	
	for(i = 0; i < 4; ++i) {
		printf("&x[%d] = %p\n", i, &x[i]);
   	}
   	printf("Address of array x: %p", x);

	printf("\nIngrese un valor : ");
	char a;
	scanf ("%c",&a);
	printf("Usted ingreso: %c", a);

	char *b = (char*) malloc (sizeof (char));
	printf("\nIngrese otro valor : ");
	scanf ("%c", b);
	printf("Ahora ingreso: %c", *b);
	
	printf("\n");
   	return 0;
}