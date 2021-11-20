<?php

namespace App\Helpers\Avisos;

class AvisosContacto extends Avisos
{

    public function __construct($user)
    {
        parent::__construct($user);
    }

    public function sendContactMessage($data)
    {
        return $this->insert($this->user, $this->email, 'Consulta desde la web', $this->name, 'contact.message', $data);
    }
}
