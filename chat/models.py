from django.db import models


class Room(models.Model):
    title = models.CharField(max_length=255)
    messages = models.ManyToManyField("Message")
    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)

    def __str__(self) -> str:
        return "{}".format(self.title)


class Message(models.Model):
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)

    def __str__(self) -> str:
        return "{}".format(self.user)
