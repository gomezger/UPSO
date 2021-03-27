<?php

namespace App\Helpers\Avisos;

class AvisosPaper extends Avisos
{

    public function __construct($user)
    {
        parent::__construct($user);
    }

    public function sendPaperDownload($data)
    {
        return $this->insert($this->email, $this->user, 'Descargar publicación', $this->name, 'avisos.paper.download', $data);
    }
}
