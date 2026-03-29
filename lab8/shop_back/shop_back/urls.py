from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Welcome to the Shop API</h1><p>Go to <a href='/api/products/'>/api/products/</a> to see data.</p>")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', home),  # This fixes the 404 on the main page
]