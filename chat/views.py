from django.shortcuts import render
from .models import Room
from django.views.generic import DetailView


def home(request):
    rooms = Room.objects.all()

    return render(
        request,
        "home.html",
        {
            "rooms": rooms,
        },
    )


class RoomDetailView(DetailView):
    model = Room
    template_name = "list-messages.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
