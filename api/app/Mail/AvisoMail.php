<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AvisoMail extends Mailable
{
    use Queueable, SerializesModels;

    public $from_mail, $to, $name, $subject, $data, $reply;



    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($from_mail, $subject, $name, $view, $data)
    {
        $this->from_mail = $from_mail;
        $this->name = $name;
        $this->subject = $subject;
        $this->view = $view;
        $this->data = $data;
        $this->email = config('mail.from.address');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($address = $this->email, $name = $this->name)
                    ->view($this->view)
                    ->subject($this->subject)
                    ->with($this->data)
                    ->replyTo($this->from_mail);


    }
}
