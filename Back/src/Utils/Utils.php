<?php

namespace App\Utils;

class Utils
{

    /**
     * Clean the content of the news to make it readable
     *
     * @param [object] $news
     * @return object
     */
    public function checkContent($news)
    {
        $content = $news->getOriginalContent().'FIN';

        $cleanedTextDescription = $this->cleaning($content);

        $news->setContent($cleanedTextDescription);
        if ($news->getContent() === '') {
            $news->setContent(null);
        }

        return $news;
    }

    /**
     * Clean the text element of the content
     *
     * @param [string] $text
     * @return string
     */
    public function cleaning($text)
    {
        $cleanParagraphs = preg_replace('/([éèà@êùûôîïüöäâçœa-zA-Z0-9\.,:%!\*\$\?\-\(\)_ \/\[\]\{\};\'"#=]*)(\r\n?)/', '<p>$1</p>$2', $text);
        $cleanLastLine = preg_replace('/([éèà@êùûôîïüöäâçœa-zA-Z0-9\.,:!\*\$\?\-\(\)_ \/\[\]\{\};\'"#=%]*)FIN/', '<p>$1</p>', $cleanParagraphs);
        $cleanText = preg_replace('/<p><\/p>/', '', $cleanLastLine);

        return $cleanText;
    }
}

