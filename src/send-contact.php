<?php



if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $input = json_decode(file_get_contents('php://input'));

    if (
        $input !== null
        && isset($input->name) && !empty($input->name)
        && isset($input->subject) && !empty($input->subject)
        && isset($input->email) && !empty($input->email)
        && isset($input->content) && !empty($input->content)
    ) {
        $email = "apisak.neino@gmail.com";
        $content = "email: " . $input->email;
        $content .= "\n";
        $content .= "subject : " . $input->subject;
        $content .= "\n";
        $content .= "name : " . $input->name;
        $content .= "\n";
        $content .= "content : " . $input->content;

        mail($email, $input->subject, $content);

        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
        header("Access-Control-Expose-Headers: access-control-allow-origin");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        header("Content-Type: application/json; charset=UTF-8");
        
        echo json_encode(['success' => true]);
        exit();
    }
}

echo json_encode(['success' => false]);
exit();